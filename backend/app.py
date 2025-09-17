from collections import defaultdict
from copy import deepcopy
from os import getenv

import uvicorn
from fastapi import FastAPI, HTTPException, Request, status
from pydantic import BaseModel, ValidationError


USE_MOCK_AUTHENTICATION = getenv("USE_MOCK_AUTHENTICATION", "true").lower() != "false"


class User(BaseModel):
    email: str
    username: str
    name: str


class TodoItem(BaseModel):
    id: int
    title: str


class TodoItemForCreate(BaseModel):
    title: str


class State:
    DEFAULT_TODOS: list[TodoItem] = [
        TodoItem(id=1, title="Find a great team"),
        TodoItem(id=2, title="Choose a project"),
        TodoItem(id=3, title="Interview people for need-finding"),
        TodoItem(id=4, title="Come up with a lo-fi prototype"),
    ]

    todos_by_email: defaultdict[str, list[TodoItem]] = defaultdict(
        lambda: deepcopy(State.DEFAULT_TODOS)
    )

    def get_todos(self, email: str) -> list[TodoItem]:
        return self.todos_by_email[email]

    def create_todo(self, email: str, item: TodoItemForCreate) -> TodoItem:
        todos = self.todos_by_email[email]
        next_id = max((todo.id for todo in todos), default=0) + 1
        new_todo = TodoItem(id=next_id, title=item.title)
        todos.append(new_todo)
        return new_todo

    def delete_todo(self, email: str, todo_id: int):
        todos = self.todos_by_email[email]
        new_todos = [todo for todo in todos if todo.id != todo_id]
        self.todos_by_email[email] = new_todos


app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")
state = State()

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


if __name__ == "__main__":
    print(f"Starting server")
    uvicorn.run(
        "__main__:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
