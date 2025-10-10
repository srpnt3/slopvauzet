# json -->
# course Id
# course name
# semester
# language
# lecturers
# credit amount
# schedule (day, place, time) (potentially lecture and ex sesh? --> find way of selecting only your chosen ex sesh, otherwise schedule is instantly full after just 1 course)

import json
from pprint import pprint

with open("test.json") as json_data:
    data = json.load(json_data)
    pprint(data)











