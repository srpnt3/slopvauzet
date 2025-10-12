from collections import defaultdict
from copy import deepcopy
from datetime import datetime, timedelta
from os import getenv
import json
from pprint import pprint


import uvicorn
from fastapi import FastAPI, HTTPException, Request, status
from pydantic import ValidationError

from models import Course

from fileConversionService.csv_vibe_converter import convert

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

@app.get("/api/search", status_code=status.HTTP_200_OK)
def apiSearch(query: str, filters: str):
    filters = json.loads(filters)

    # todo: call search function

    with open("./scraper/courses_2025W_en.json", 'r') as file:
        file_content = file.read()
        file_json = json.loads(file_content)
        return file_json


@app.get("/api/recommend", status_code=status.HTTP_200_OK)
def apiRecommend(request: Request):
    return ""


@app.post("/api/convertcsv", status_code=status.HTTP_200_OK)
async def apiConvertCSV(request: Request):
    courses = await request.json()
    csv = convert(courses)
    return csv


@app.post("/api/convertics", status_code=status.HTTP_200_OK)
def apiConvertICS(request: Request):
    return ""


@app.get("/api/test", status_code=status.HTTP_200_OK)
def apiTest(request: Request):
    return "test 123"


if __name__ == "__main__":
    print(f"Starting server")
    uvicorn.run(
        "__main__:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
