from collections import defaultdict
from copy import deepcopy
from os import getenv

import uvicorn
from ai import AIService
from fastapi import FastAPI, HTTPException, Request, status
from models import TodoItem, TodoItemForCreate, User
from pydantic import ValidationError

LITELLM_PROXY_API_KEY = getenv("LITELLM_PROXY_API_KEY")
LITELLM_PROXY_API_BASE = getenv("LITELLM_PROXY_API_BASE")
USE_MOCK_AUTHENTICATION = getenv("USE_MOCK_AUTHENTICATION", "true").lower() != "false"


class State:
    DEFAULT_TODOS: list[TodoItem] = [
        TodoItem(
            id=1,
            title="Find a great team",
            description="Find a great team to work with",
            deadline="2025-01-01",
        ),
        TodoItem(
            id=2,
            title="Choose a project",
            description="Choose a project to work on",
            deadline="2025-01-01",
        ),
        TodoItem(
            id=3,
            title="Interview people for need-finding",
            description="Interview people for need-finding",
            deadline="2025-01-01",
        ),
        TodoItem(
            id=4,
            title="Come up with a lo-fi prototype",
            description="Come up with a lo-fi prototype",
            deadline="2025-01-01",
        ),
    ]

    # Mapping from user email to their todo items
    # When a new email is seen, initialize with a fresh copy of DEFAULT_TODOS
    todos_by_email: defaultdict[str, list[TodoItem]] = defaultdict(
        lambda: deepcopy(State.DEFAULT_TODOS)
    )

    def get_todos(self, email: str) -> list[TodoItem]:
        return self.todos_by_email[email]

    def create_todo(self, email: str, item: TodoItemForCreate) -> TodoItem:
        todos = self.todos_by_email[email]
        next_id = max((todo.id for todo in todos), default=0) + 1
        new_todo = TodoItem(
            id=next_id,
            title=item.title,
            description=item.description,
            deadline=item.deadline,
        )
        todos.append(new_todo)
        return new_todo

    def delete_todo(self, email: str, todo_id: int):
        todos = self.todos_by_email[email]
        new_todos = [todo for todo in todos if todo.id != todo_id]
        self.todos_by_email[email] = new_todos


state = State()
ai_service = AIService(
    "openai/gpt-4o-mini", LITELLM_PROXY_API_BASE, LITELLM_PROXY_API_KEY
)

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")


def extract_user(request: Request) -> User:
    if USE_MOCK_AUTHENTICATION:
        username = "aeinstein"
        email = "aeinstein@ethz.ch"
        name = "Albert Einstein"
    else:
        username = request.headers.get("X-authentik-username")
        email = request.headers.get("X-authentik-email")
        name = request.headers.get("X-authentik-name")

    try:
        user = User(username=username, email=email, name=name)
    except ValidationError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication headers, expected X-authentik-username, X-authentik-email, and X-authentik-name",
        )

    return user


@app.get("/api/me", response_model=User, status_code=status.HTTP_200_OK)
def auth_me(request: Request):
    return extract_user(request)


@app.get("/api/todos", response_model=list[TodoItem], status_code=status.HTTP_200_OK)
def get_todos(request: Request):
    user = extract_user(request)
    return state.get_todos(user.email)


@app.post("/api/todos", response_model=TodoItem, status_code=status.HTTP_201_CREATED)
def create_todo(request: Request, item: TodoItemForCreate):
    user = extract_user(request)
    return state.create_todo(user.email, item)


@app.delete("/api/todos/{todo_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(request: Request, todo_id: int):
    user = extract_user(request)
    state.delete_todo(user.email, todo_id)


@app.get(
    "/api/todos/generate",
    response_model=TodoItemForCreate,
    status_code=status.HTTP_200_OK,
)
def generate_todo(prompt: str):
    try:
        return ai_service.generate_todo(prompt)
    except Exception:
        return TodoItemForCreate(title="", description="", deadline="")


if __name__ == "__main__":
    print(f"Starting server")
    uvicorn.run(
        "__main__:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
