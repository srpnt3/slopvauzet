
# from fastapi import FastAPI  // what am i even using this for? 
import json
import csv
import re
from pprint import pprint

json_test_data = json.load(open("test.json"))

def get_correct_hours(str_arr_in): # dont read this its massive [redacted]
    str_arr_out = str_arr_in.copy()
    i = 1
    while int(str_arr_out[0]) + i < int(str_arr_out[-1]):
        str_arr_out.append(str(int(str_arr_out[0]) + i))
        i += 1
        str_arr_out = sorted(str_arr_out)
        str_arr_out.pop()
    return str_arr_out

def get_weekday_index(day_str):
    days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
    if day_str in days:
        return days.index(day_str) + 1
    return -1


def get_timetanle_data_json(json_arr_in):
    json_arr_out = []
    weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"]
    for curr_json in json_arr_in:    
        course_name = ""
        lecture_time = []

        lecture_schedule = ""
        if "classes" in curr_json and curr_json["classes"][0].get("type") == "Lecture":
            lecture_schedule = curr_json["classes"][0].get("schedule")
            for curr_time_slot in lecture_schedule:
                if curr_time_slot.get("day") not in weekdays:
                    continue

                time_window = re.findall(r'\d+', curr_time_slot.get("time"))[::2]
                time_window = get_correct_hours(time_window)
                curr_time = {
                    "day" : curr_time_slot.get("day"),
                    "time" :  time_window
                }
                lecture_time.append(curr_time)

        if "title" in curr_json:
            course_name = curr_json["title"]
            json_out = { # gen here to prevent invalid non course jsons (will def not lead to issues later)
                "course name": course_name,
                "lecture time": lecture_time
            }  

        json_arr_out.append(json_out)
    return json_arr_out

def gen_timetable_csv_from_json(json_arr_in):
    
    print(json_arr_in)
    timetable_arr = [[0 for _ in range(6)] for _ in range(15)]
    curr_hour = 5
    for curr_row in timetable_arr:
        curr_row[0] = str(curr_hour) + "-" + str(curr_hour + 1)
        curr_hour += 1
    timetable_arr[0] = ["||||", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    
    for curr_json in json_arr_in:
        if "course name" in curr_json:
            course_name = curr_json["course name"]

        if "lecture time" in curr_json:
            lecture_time = curr_json["lecture time"]
            
        for curr_time_slot in lecture_time:
            day_idx = get_weekday_index(curr_time_slot.get("day"))
            print(str(day_idx) + " " + curr_time_slot.get("day"))
            for curr_hour in curr_time_slot.get("time"):
                print(int( curr_hour) - 5)
                timetable_arr[int(curr_hour) - 5][day_idx] = course_name

    # pprint(timetable_arr)
    with open("timetable_out.csv", 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        for row in timetable_arr:
            writer.writerow(row)

    return timetable_arr
    
def test_fn(json_in):
    timetable_data = get_timetanle_data_json([json_in])
    gen_timetable_csv_from_json(timetable_data)
    return


test_fn(json_test_data)









