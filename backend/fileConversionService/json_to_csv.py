# json -->
# course Id
# course name
# semester
# language
# lecturers
# credit amount
# schedule (day, place, time) (potentially lecture and ex sesh? --> find way of selecting only your chosen ex sesh, otherwise schedule is instantly full after just 1 course)

import json
import csv
from pprint import pprint

json_test_data = json.load(open("test.json"))

def get_relevant_data_json(json_in):
    course_id = ""
    course_name = ""
    sem = ""
    lang = ""
    lecturers = ""
    etc = ""

    if "course_id" in json_in:
        course_id = json_in["course_id"]

    if "title" in json_in:
        course_name = json_in["title"]
    
    if "semester" in json_in:
        sem = json_in["semester"]   

    if "language_of_instruction" in json_in:
        lang = json_in["language_of_instruction"]  

    if "lecturers" in json_in:  
        lecturers = ', '.join(json_in["lecturers"])

    if "performance_assessment" in json_in and "ects_credits" in json_in["performance_assessment"]:
        etc = str(json_in["performance_assessment"]["ects_credits"])
    
    json_out = {
        "course id": course_id,
        "course name": course_name,
        "semester": sem,
        "language": lang,
        "lecturers": lecturers,
        "etc": etc
    }  

    print(json_out)  
    return json_out

def gen_csv_from_json(json_in):
    with open("out.csv", "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(json_in.keys())
        writer.writerow(json_in.values())
    print("CSV file 'output.csv' has been created.")
    return
    
def test_fn(json_in):
    relevant_data = get_relevant_data_json(json_in)
    gen_csv_from_json(relevant_data)
    return


test_fn(json_test_data)









