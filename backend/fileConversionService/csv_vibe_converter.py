#!/usr/bin/env python3
"""
Create a schedule CSV from an array of ETH course JSONs.

Input format.
- Top-level: list of courses, each containing fields like "title", "course_id", "classes".
- Each course "classes" entry may contain a "schedule" list with objects:
  { "venue": ["HGE 5"], "day": "Mon" | "Mon/2" | "16.09.", "time": "08:15-10:00" }

Output.
- CSV with rows for hours (e.g., 06-07, 07-08, ...) and columns for weekdays Mon..Fri.
- Each populated cell contains one or more lines "<CourseType>: <CourseTitle> @ <Room>".
- Events on explicit dates (e.g., "16.09.") are ignored for the weekday grid.
- Biweekly days like "Mon/2" are treated as Monday for placement in the grid.

CLI.
  python csv_vibe_converter.py --in input.json --out timetable.csv --start 06 --end 22
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Optional
import io


WEEKDAYS: list[str] = ["Mon", "Tue", "Wed", "Thu", "Fri"]


def parse_time_window(window: str) -> tuple[int, int]:
    """Parse a time window like "08:15-10:00" -> (8, 10) for hourly grid.

    We mark every fully or partially covered hour as occupied.
    """
    start_str, end_str = window.split("-")
    s_h, _s_m = map(int, start_str.split(":"))
    e_h, e_m = map(int, end_str.split(":"))

    start_hour = s_h
    end_hour = e_h if e_m == 0 else e_h  # Reserve end hour as occupied if any minutes.
    return start_hour, end_hour


def expand_hours(start_hour: int, end_hour: int) -> list[int]:
    """Expand start/end hours into a list of integer hours covered.

    Example: (8, 10) -> [8, 9, 10] if end has minutes; but we treat hourly buckets inclusive of the ending hour only when end minutes > 0.
    To keep it consistent and informative in a timetable, we mark [start_hour, end_hour) if end is exact; otherwise include end_hour.
    For simplicity, we include start_hour..(end_hour-1) if end is exact, and include end hour if minutes > 0 handled by parse.
    """
    # We will fill [start_hour, end_hour) to avoid double-occupying the following hour when event ends exactly at H:00.
    return list(range(start_hour, max(start_hour, end_hour)))


def normalize_weekday(day_value: str) -> Optional[str]:
    """Map values like "Mon" or "Mon/2" to a weekday name; None if not a weekday.
    """
    if not day_value:
        return None
    value = day_value.strip()
    if "/" in value:
        value = value.split("/", 1)[0]
    return value if value in WEEKDAYS else None


def is_explicit_date(day_value: str) -> bool:
    return bool(re.fullmatch(r"\d{1,2}\.\d{1,2}\.?", (day_value or "").strip()))


@dataclass
class SlotEntry:
    course_type: str
    title: str
    room: str

    def render(self) -> str:
        room_str = f" @ {self.room}" if self.room else ""
        return f"{self.course_type}: {self.title}{room_str}"


def build_grid(json_data: list[dict], start_hour: int, end_hour: int) -> list[list[str]]:
    """Build a grid with header row and hourly rows for Mon..Fri.

    Returns a list-of-rows, each row is a list-of-cells (strings possibly with newlines).
    """
    # Header
    grid: list[list[str]] = []
    header = ["hour"] + WEEKDAYS
    grid.append(header)

    # Pre-create rows for each hour
    for hour in range(start_hour, end_hour):
        label = f"{hour:02d}-{(hour + 1):02d}"
        grid.append([label] + [""] * len(WEEKDAYS))

    # Populate grid
    for course in json_data:
        title = course.get("title") or course.get("course_id") or "Course"
        classes = course.get("classes", []) or []

        for cls in classes:
            class_type = cls.get("type") or "Class"
            schedule_items = cls.get("schedule", []) or []
            for item in schedule_items:
                day_value = (item.get("day") or "").strip()
                time_window = item.get("time") or ""
                venues = item.get("venue") or []
                room = ", ".join([str(v) for v in venues if v])

                # Skip explicit date entries for a weekday grid
                if not time_window or "-" not in time_window:
                    continue
                if is_explicit_date(day_value):
                    continue

                weekday = normalize_weekday(day_value)
                if weekday is None:
                    continue

                start_h, end_h = parse_time_window(time_window)
                for h in expand_hours(start_h, end_h):
                    if h < start_hour or h >= end_hour:
                        continue
                    row_idx = 1 + (h - start_hour)  # +1 for header row
                    col_idx = 1 + WEEKDAYS.index(weekday)
                    entry = SlotEntry(class_type, title, room).render()
                    existing = grid[row_idx][col_idx]
                    if existing:
                        if entry not in existing:
                            grid[row_idx][col_idx] = existing + "\n" + entry
                    else:
                        grid[row_idx][col_idx] = entry

    return grid


def write_csv(grid: list[list[str]], output_path: str | Path) -> None:
    output_path = Path(output_path)
    with output_path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        for row in grid:
            writer.writerow(row)


def convert(json_array: list[dict]) -> str:
    grid = build_grid(json_array, start_hour=6, end_hour=22)
    out = io.StringIO()
    writer = csv.writer(out, lineterminator='\n')
    for row in grid:
        writer.writerow(row)
    return out.getvalue()


def convert_json_array_to_csv(json_array: list[dict], output_csv_path: str | Path, start_hour: int = 6, end_hour: int = 22) -> None:
    """Convert an in-memory JSON array of courses to a weekday/hour CSV file.

    Parameters.
    - json_array: A list of course dicts like those in test_json.json.
    - output_csv_path: Where to write the CSV file.
    - start_hour/end_hour: Inclusive start hour and exclusive end hour for the grid.
    """
    grid = build_grid(json_array, start_hour=start_hour, end_hour=end_hour)
    write_csv(grid, output_csv_path)


def convert_jsons_to_csv(input_json_path: str | Path, output_csv_path: str | Path, start_hour: int = 6, end_hour: int = 22) -> None:
    input_json_path = Path(input_json_path)
    with input_json_path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise ValueError("Expected top-level JSON array of courses.")

    grid = build_grid(data, start_hour=start_hour, end_hour=end_hour)
    write_csv(grid, output_csv_path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert ETH course JSON to a weekday/hour CSV grid.")
    default_in = Path(__file__).with_name("test_json.json")
    default_out = Path(__file__).with_name("timetable.csv")
    parser.add_argument("--in", dest="input_path", default=str(default_in))
    parser.add_argument("--out", dest="output_path", default=str(default_out))
    parser.add_argument("--start", dest="start_hour", type=int, default=6)
    parser.add_argument("--end", dest="end_hour", type=int, default=22)
    args = parser.parse_args()

    convert_jsons_to_csv(args.input_path, args.output_path, start_hour=args.start_hour, end_hour=args.end_hour)
    print(f"Wrote CSV schedule to {args.output_path}")


if __name__ == "__main__":
    main()


# from backend.fileConversionService.csv_vibe_converter import convert_json_array_to_csv

# # json_array is a Python list containing course dicts like in test_json.json
# convert_json_array_to_csv(
#     json_array,
#     "/home/bendik/projects/slopvauzet/backend/fileConversionService/timetable_from_mem.csv",
#     start_hour=6,
#     end_hour=22,
# )

