import os
import json
from datetime import datetime, timedelta
from litellm import completion
from pydantic import BaseModel, ValidationError


class TodoItem(BaseModel):
    title: str
    description: str
    deadline: str


class AIService:
    def __init__(self, api_model: str, api_base_url: str = None, api_key: str = None):
        self.api_key = api_key or os.getenv("LITELLM_PROXY_API_KEY")
        self.api_base_url = api_base_url or os.getenv("LITELLM_PROXY_API_BASE")
        self.api_model = api_model

    def _generate_todo_prompt(self, prompt: str) -> str:

        today_iso = datetime.now().isoformat()
        today_date = datetime.now()
        weekday_name = datetime.now().strftime("%A")

        return [
            {
                "role": "system",
                "content": f"You are a personal assistant that converts user input into a concise todo item with description. Today is {today_iso} ({weekday_name}). ",
            },
            {
                "role": "user",
                "content": "I need to clean my room because it's messy today.",
            },
            {
                "role": "assistant",
                "content": json.dumps({
                    "title": "Clean room",
                    "description": "Organize and tidy up living space",
                    "deadline": today_iso,
                }),
            },
            {
                "role": "user",
                "content": "I have to finish my project report by next week.",
            },
            {
                "role": "assistant",
                "content": json.dumps({
                    "title": "Finish project report",
                    "description": "Complete final report and submit",
                    "deadline": (today_date + timedelta(days=7)).strftime("%Y-%m-%d"),
                }),
            },
            {"role": "user", "content": "Call my mom next Monday"},
            {
                "role": "assistant",
                "content": json.dumps({
                    "title": "Call mom",
                    "description": "Phone call with mother",
                    "deadline": (
                        today_date + timedelta(days=(7 - today_date.weekday()) % 7 or 7)
                    ).strftime("%Y-%m-%d"),
                }),
            },
            {
                "role": "user",
                "content": prompt,
            },
        ]

    def generate_todo(self, prompt: str, retries: int = 3) -> TodoItem:

        response = completion(
            model=self.api_model,
            api_key=self.api_key,
            base_url=self.api_base_url,
            messages=self._generate_todo_prompt(prompt),
            response_format=TodoItem,
        )

        try:
            return TodoItem.model_validate_json(response.choices[0].message.content)
        except ValidationError as e:
            if retries > 0:
                return self.generate_todos(prompt, retries - 1)
            else:
                raise ValueError(f"Invalid response timeout from LLM: {e}")
