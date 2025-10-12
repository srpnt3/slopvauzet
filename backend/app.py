from collections import defaultdict
from copy import deepcopy
from datetime import datetime, timedelta
from os import getenv

import uvicorn
from fastapi import FastAPI, HTTPException, Request, status
from pydantic import ValidationError

from models import Course

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

@app.get("/api/search", response_model=list[Course], status_code=status.HTTP_200_OK)
def apiSearch(request: Request):
    return []


@app.get("/api/recommend", response_model=list[Course], status_code=status.HTTP_200_OK)
def apiRecommend(request: Request):
    return []


@app.get("/api/convertcsv", response_model=str, status_code=status.HTTP_200_OK)
def apiConvertCSV(request: Request):
    return ""


@app.get("/api/convertics", response_model=str, status_code=status.HTTP_200_OK)
def apiConvertICS(request: Request):
    return ""


@app.get("/api/test", response_model=str, status_code=status.HTTP_200_OK)
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
