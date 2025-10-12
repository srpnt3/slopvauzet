from datetime import datetime

from pydantic import BaseModel


class Course(BaseModel):
    id: str
    title: str
