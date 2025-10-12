from collections import defaultdict
from copy import deepcopy
from datetime import datetime, timedelta
from os import getenv
import json
from pprint import pprint

from slopathon.search_algo import search, read_and_process_json
import logging 

import uvicorn
from fastapi import FastAPI, HTTPException, Request, status
from pydantic import ValidationError

from models import Course

from fileConversionService.csv_vibe_converter import convert
logger = logging.getLogger('uvicorn.error')

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")
app.df = read_and_process_json('scraper/courses_tagged.json')

@app.get("/api/search", status_code=status.HTTP_200_OK)
def apiSearch(query: str, filters: str):
    course_dict = search(df = app.df, query=query, filter_criteria=json.loads(filters))
    return course_dict


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
