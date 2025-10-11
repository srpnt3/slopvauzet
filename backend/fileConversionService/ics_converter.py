#!/usr/bin/env python3
"""
Convert ETH course JSON (test_json.json) to an .ics calendar.

Assumptions.
- Weekly timetable entries (e.g., Mon/Tue/Wed/Thu/Fri) are exported as weekly recurring events (FREQ=WEEKLY).
- Biweekly entries (e.g., Mon/2, Tue/2, ...) are exported as biweekly recurring events (FREQ=WEEKLY;INTERVAL=2).
- Explicit date entries like "16.09." are exported as one-off events on that day.
- Semester anchor date for weekly events is inferred from the "semester" field:
  - "Autumn Semester <YEAR>" anchors to the first Monday on/after Sep 15 of <YEAR>.
  - "Spring Semester <YEAR>" anchors to the first Monday on/after Feb 15 of <YEAR>.
- Timezone is Europe/Zurich.

Run.
  python ics_converter.py --in test_json.json --out schedule.ics
"""

from __future__ import annotations

import argparse
import json
import re
import uuid
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from pathlib import Path
from typing import Iterable, Optional


# --------------------------- Parsing Utilities ---------------------------

WEEKDAY_ABBREV_TO_INDEX: dict[str, int] = {
    "Mon": 0,
    "Tue": 1,
    "Wed": 2,
    "Thu": 3,
    "Fri": 4,
    "Sat": 5,
    "Sun": 6,
}


def parse_time_window(window: str) -> tuple[time, time]:
    """Parse a time window string like "07:45-17:30" to start/end times.

    Raises ValueError if the format is invalid.
    """
    start_str, end_str = window.split("-")
    start_h, start_m = map(int, start_str.split(":"))
    end_h, end_m = map(int, end_str.split(":"))
    return time(start_h, start_m), time(end_h, end_m)


def is_explicit_date(day_value: str) -> bool:
    """Return True if day_value is an explicit date like "16.09." or "13.01."."""
    return bool(re.fullmatch(r"\d{1,2}\.\d{1,2}\.?", day_value.strip()))


def parse_explicit_date(day_value: str, semester_text: str) -> date:
    """Parse an explicit day string like "16.09." into a concrete date using semester year.

    For Autumn semesters, months Jan-Jul are assumed to be in the next calendar year.
    For Spring semesters, all months are assumed to be in the same calendar year.
    """
    day_value = day_value.strip().rstrip(".")
    d_str, m_str = day_value.split(".")
    d, m = int(d_str), int(m_str)

    year = extract_year_from_semester(semester_text)
    sem_lower = (semester_text or "").lower()

    if "autumn" in sem_lower or "fall" in sem_lower or "winter" in sem_lower:
        # Autumn semester spills into the following year (Jan–Jul) for explicit dates.
        if m < 8:
            year += 1
    # For Spring semester, keep same year.

    return date(year, m, d)


def extract_year_from_semester(semester_text: str) -> int:
    """Extract the year from strings like "Autumn Semester 2025"."""
    match = re.search(r"(19|20)\d{2}", semester_text or "")
    if not match:
        raise ValueError(f"Unable to extract year from semester text: {semester_text!r}")
    return int(match.group(0))


def infer_semester_anchor(semester_text: str) -> date:
    """Infer semester anchor date used to find first weekly occurrence per weekday.

    - Autumn: first Monday on/after Sep 15 of the semester year.
    - Spring: first Monday on/after Feb 15 of the semester year.
    """
    year = extract_year_from_semester(semester_text)
    sem_lower = (semester_text or "").lower()
    if "autumn" in sem_lower or "fall" in sem_lower or "winter" in sem_lower:
        anchor = date(year, 9, 15)
    else:
        anchor = date(year, 2, 15)

    # Advance to Monday (0) on or after anchor.
    delta_days = (0 - anchor.weekday()) % 7
    return anchor + timedelta(days=delta_days)


def next_weekday_on_or_after(anchor: date, weekday_index: int) -> date:
    """Return the first date on or after anchor that matches weekday_index (Mon=0)."""
    delta = (weekday_index - anchor.weekday()) % 7
    return anchor + timedelta(days=delta)


def normalize_weekday_value(day_value: str) -> Optional[int]:
    """Normalize day value like "Mon" or "Mon/2" to weekday index; return None if not a weekday.
    """
    if not day_value:
        return None
    value = day_value.strip()
    if "/" in value:
        value = value.split("/", 1)[0]
    return WEEKDAY_ABBREV_TO_INDEX.get(value)


def is_biweekly(day_value: str) -> bool:
    """Return True if the day value specifies a biweekly cadence (e.g., "Mon/2")."""
    if not day_value:
        return False
    value = day_value.strip()
    return "/2" in value


def escape_ics_text(text: str) -> str:
    """Escape text for iCalendar properties."""
    return (
        text.replace("\\", "\\\\")
        .replace(",", "\\,")
        .replace(";", "\\;")
        .replace("\n", "\\n")
    )


# ----------------------------- Data Models ------------------------------

@dataclass
class CourseEvent:
    """A single calendar event entry extracted from the JSON schedule."""

    summary: str
    description: Optional[str]
    location: Optional[str]
    start: datetime
    end: datetime
    rrule: Optional[str] = None


# ----------------------------- Conversion -------------------------------

def generate_events_from_json(json_data: list[dict]) -> list[CourseEvent]:
    """Generate CourseEvent entries from the parsed JSON structure."""
    events: list[CourseEvent] = []

    for course in json_data:
        title = course.get("title") or course.get("course_id") or "Course"
        course_id = course.get("course_id")
        semester_text = course.get("semester") or "Autumn Semester 2025"
        classes = course.get("classes", []) or []

        location_fallback = None
        semester_anchor = infer_semester_anchor(semester_text)

        for cls in classes:
            class_type = cls.get("type") or "Class"
            schedule_items = cls.get("schedule", []) or []
            notes = cls.get("notes") or ""

            # Choose a prefix similar to the CSV converter's convention.
            type_prefix = {
                "Lecture": "V:",
                "Exercise": "U:",
                "Mixture of lectures and exercises": "V:",
                "Seminar": "S:",
                "Practical / laboratory course": "P:",
            }.get(class_type, "")

            for item in schedule_items:
                venues = item.get("venue") or []
                location_list = [str(v) for v in venues if v]
                location = ", ".join(location_list) if location_list else location_fallback
                day_value = (item.get("day") or "").strip()
                time_window = item.get("time") or ""

                # Skip malformed entries without time range.
                if "-" not in time_window:
                    continue

                start_t, end_t = parse_time_window(time_window)

                if is_explicit_date(day_value):
                    event_date = parse_explicit_date(day_value, semester_text)
                    start_dt = datetime.combine(event_date, start_t)
                    end_dt = datetime.combine(event_date, end_t)
                    summary = f"{type_prefix} {title}".strip()
                    description = f"{class_type} — {course_id or ''}\n{notes}".strip()
                    events.append(
                        CourseEvent(
                            summary=summary,
                            description=description or None,
                            location=location,
                            start=start_dt,
                            end=end_dt,
                            rrule=None,  # One-off explicit date.
                        )
                    )
                    continue

                weekday_index = normalize_weekday_value(day_value)
                if weekday_index is None:
                    # Unknown day format; skip gracefully.
                    continue

                first_occurrence = next_weekday_on_or_after(semester_anchor, weekday_index)
                start_dt = datetime.combine(first_occurrence, start_t)
                end_dt = datetime.combine(first_occurrence, end_t)

                summary = f"{type_prefix} {title}".strip()
                description = f"{class_type} — {course_id or ''}\n{notes}".strip()

                # Weekly by default; biweekly if day specified with "/2".
                rrule = "FREQ=WEEKLY;INTERVAL=2" if is_biweekly(day_value) else "FREQ=WEEKLY"

                events.append(
                    CourseEvent(
                        summary=summary,
                        description=description or None,
                        location=location,
                        start=start_dt,
                        end=end_dt,
                        rrule=rrule,
                    )
                )

    return events


def format_dt_with_tz(dt: datetime, tzid: str) -> str:
    """Format a local datetime for iCalendar with TZID notation."""
    return f"DTSTART;TZID={tzid}:{dt.strftime('%Y%m%dT%H%M%S')}"


def format_end_with_tz(dt: datetime, tzid: str) -> str:
    """Format a local datetime for iCalendar DTEND with TZID notation."""
    return f"DTEND;TZID={tzid}:{dt.strftime('%Y%m%dT%H%M%S')}"


def build_vcalendar(events: Iterable[CourseEvent], calendar_name: str, tzid: str = "Europe/Zurich") -> str:
    """Build the VCALENDAR text with provided events."""
    now_utc = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")

    lines: list[str] = []
    lines.append("BEGIN:VCALENDAR")
    lines.append("VERSION:2.0")
    lines.append("PRODID:-//slopvauzet//ics_converter//EN")
    lines.append("CALSCALE:GREGORIAN")
    lines.append("METHOD:PUBLISH")
    lines.append(f"NAME:{escape_ics_text(calendar_name)}")
    lines.append(f"X-WR-CALNAME:{escape_ics_text(calendar_name)}")
    lines.append(f"X-WR-TIMEZONE:{tzid}")

    for ev in events:
        uid = f"{uuid.uuid4()}@slopvauzet"
        lines.append("BEGIN:VEVENT")
        lines.append(f"UID:{uid}")
        lines.append(f"DTSTAMP:{now_utc}")
        lines.append(format_dt_with_tz(ev.start, tzid))
        lines.append(format_end_with_tz(ev.end, tzid))
        lines.append(f"SUMMARY:{escape_ics_text(ev.summary)}")
        if ev.location:
            lines.append(f"LOCATION:{escape_ics_text(ev.location)}")
        if ev.description:
            lines.append(f"DESCRIPTION:{escape_ics_text(ev.description)}")
        if ev.rrule:
            lines.append(f"RRULE:{ev.rrule}")
        lines.append("END:VEVENT")

    lines.append("END:VCALENDAR")

    # Ensure CRLF as per RFC 5545.
    return "\r\n".join(lines) + "\r\n"


# ------------------------------- API ------------------------------------

def convert_json_to_ics(input_path: str | Path, output_path: str | Path, timezone: str = "Europe/Zurich", calendar_name: str = "Studyplan") -> int:
    """Convert a course JSON file to an ICS file.

    - Accepts weekday values like "Mon", "Tue" and half-day markers like "Mon/2".
    - Explicit calendar dates like "16.09." are exported as one-off events.

    Returns the number of events exported.
    """
    input_path = Path(input_path)
    output_path = Path(output_path)

    with input_path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, list):
        raise ValueError("Expected top-level JSON array of courses.")

    events = generate_events_from_json(data)
    vcal = build_vcalendar(events, calendar_name=calendar_name, tzid=timezone)

    with output_path.open("w", encoding="utf-8", newline="") as f:
        f.write(vcal)

    return len(events)


# ------------------------------- CLI ------------------------------------

def main() -> None:
    """Entry-point for converting test_json.json to an ICS calendar file."""
    parser = argparse.ArgumentParser(description="Convert course JSON to ICS.")
    default_in = Path(__file__).with_name("test_json.json")
    default_out = Path(__file__).with_name("schedule.ics")
    parser.add_argument("--in", dest="input_path", default=str(default_in), help="Path to input JSON file.")
    parser.add_argument("--out", dest="output_path", default=str(default_out), help="Path to output ICS file.")
    parser.add_argument("--tz", dest="timezone", default="Europe/Zurich", help="TZID for calendar events.")
    parser.add_argument("--name", dest="calendar_name", default="Studyplan", help="Calendar display name.")
    args = parser.parse_args()

    count = convert_json_to_ics(args.input_path, args.output_path, timezone=args.timezone, calendar_name=args.calendar_name)
    print(f"Wrote {count} events to {args.output_path}")


if __name__ == "__main__":
    main()


