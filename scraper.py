import requests
from bs4 import BeautifulSoup
import json
import re

DOMAIN = "https://www.vvz.ethz.ch"

json_format = {
    # Correct names
    "course_id":                {"en": "Course ID",                                      "de": "Kurs ID"},
    "title":                    {"en": "Course title",                                   "de": "Kursname"},
    "semester":                 {"en": "Semester",                                       "de": "Semester"},
    "periodicity":              {"en": "Periodicity",                                    "de": "Periodizität"},
    "language_of_instruction":  {"en": "Language of instruction",                        "de": "Lehrsprache"},
    "lecturers":                {"en": "Lecturers",                                      "de": "Dozierende"},
    "comment":                  {"en": "Comment",                                        "de": "Kommentar"},
    
    
    "classes":                  {"en": "Courses",                                        "de": "Lehrveranstaltungen"},
    "class_type":               {"en": "Number",                                         "de": "Nummer"},
    "hours_per_week":           {"en": "Hours per week",                                 "de": "Stunden pro Woche"},
    "schedule":                 {"en": "Schedule",                                       "de": "Stundenplan"},
    "day":                      {"en": "Day",                                            "de": "Tag"},
    "time":                     {"en": "Time",                                           "de": "Zeit"},
    "venue":                    {"en": "Venue",                                          "de": "Ort"},
    "notes":                    {"en": "Notes",                                          "de": "Bemerkungen"},
    
    # Correct names
    "catalogue_data":           {"en": "Catalogue data",                                 "de": "Katalogdaten"},
    "description":              {"en": "Abstract",                                       "de": "Kurzbeschreibung"},
    "learning_objectives":      {"en": "Learning objective",                             "de": "Lernziel"},
    "content":                  {"en": "Content",                                        "de": "Inhalt"},
    "lecture_notes":            {"en": "Lecture notes",                                  "de": "Skript"},
    "literature":               {"en": "Literature",                                     "de": "Literatur"},
    "prerequisites":               {"en": "Prerequisites / Notice",                      "de": "Voraussetzungen / Besonderes"},
    # Correct names
    "performance_assessment":   {"en": "Performance assessment",                         "de": "Leistungskontrolle"},
    "ects_credits":             {"en": "ECTS credits",                                   "de": "ECTS Kreditpunkte"},
    "assessment_type":          {"en": "Type",                                           "de": "Form"},
    "language_of_examination":  {"en": "Language of examination",                        "de": "Prüfungssprache"},
    "repetition":               {"en": "Repetition",                                     "de": "Repetition"},
    "examination":              {"en": "Mode of examination",                            "de": "Prüfungsmodus"},
    "additional_info":          {"en": "Additional information on mode of examination",  "de": "Zusatzinformation zum Prüfungsmodus	"},
    "exam_aid":                 {"en": "Written aids",                                   "de": "Hilfsmittel schriftlich"},
    
    "regulations":              {"en": "For programme regulations(Examination block)",   "de": "Für Reglement(Prüfungsblock)"},
    "examination_block":        {"en": "In examination block",                           "de": "Im Prüfungsblock für"},
    
    # Correct names
    "offered_in":               {"en": "Offered in",                                     "de": "Angeboten in"},
    "program":                  {"en": "Programme",                                      "de": "Studiengang"},
    "section":                  {"en": "Section",                                        "de": "Bereich"},
    "type":                     {"en": "Type",                                           "de": "Typ"}
}
custom_parser = {
    "hours_per_week": (lambda ects: int(re.search(r"\d+", ects.get_text()).group()) if re.search(r"\d+", ects.get_text()) else 0),
    "ects_credits":   (lambda hours: int(re.search(r"\d+", hours.get_text()).group()) if re.search(r"\d+", hours.get_text()) else 0)
}
course_types = {
    'V': 'Lecture ',
    'U': 'Exercise ',
    'G': 'Mixture oflectures and exercises',
    'S': 'Seminar',
    'K': 'Colloquium',
    'P': 'Practical / laboratory course',
    'A': 'Independent project',
    'D': 'Diploma thesis ',
    'R': 'Revision course / private study',
}

def scrape_vvz_course(url, language_site):
    response = requests.get(url)
    print(url)

    while(response.status_code != 200):
        print(response.status_code)
        response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    # --- Helpers ---
    def clean(text):
        return re.sub(r"\s+", " ", text.strip()) if text else ""
    
    def get_field_name(field):
        return json_format[field][language_site]

    def get_all_texts(selector):
        return [el.get_text(strip=True) for el in soup.select(selector)]
    
    def get_table_elements(table, elements, table_inner_headers=False):
        result = []
        partial_result = {}
        ass_desc =""
        for row in next(table.children):
            row_els = row.children
            name = next(row_els).get_text(strip=True)
            field = next(row_els, None)
            if(field == None):
                if len(partial_result) > 0:
                    if table_inner_headers: 
                        partial_result["assessment_description"] = ass_desc
                    result.append(partial_result)
                partial_result = {}
                ass_desc = name
                continue

            index = [elem for i, elem in enumerate(elements) if (get_field_name(elem) == name)]
            if len(index) != 0:
                if index[0] in custom_parser:
                    partial_result[index[0]] = custom_parser[index[0]](field)
                else:
                    partial_result[index[0]] = field.get_text("\n")
        
        if len(partial_result) > 0:
            if table_inner_headers: 
                partial_result["assessment_description"] = ass_desc
            result.append(partial_result)
        return result

    def get_schedule(table):
        result = []
        for row in next(table.children):
            current_course = {}
            row_els = row.children
            
            # Get Class type
            course_type = next(row_els).get_text(strip=True)
            if course_type == get_field_name('class_type'):
                continue
            current_course['type'] = course_types[course_type[-1]].strip()
            
            # Get class notes
            notes = next(row_els, None)
            current_course['notes'] = ""
            for i in notes.children:
                try:
                    if i.get('class', None)[0] == "kommentar-lv":
                        current_course['notes'] = i.get_text()
                except :
                    pass    
                
            current_course['hours_per_week'] = custom_parser["hours_per_week"](next(row_els, None)) 
            
            schedule_table = next(row_els, None)
            
            classes = []
            current_slot = {}
            if not isinstance(schedule_table.children, str):
                
                for entry in next(schedule_table.children, []):
                    
                    if isinstance(entry, str): 
                        break 
                    entry_else = entry.children
                    day = next(entry_else).get_text(strip=True)

                    # If the day changes, we add it as an entry
                    if(len(day) != 0):
                        if len(current_slot) != 0:    
                            classes.append(current_slot)
                        current_slot = {}
                        current_slot['venue'] = []
                        current_slot['day'] = day
                    time = next(entry_else).get_text(strip=True)
                    venue = next(entry_else).get_text(strip=True).replace("»","")
                    
                    # New time slot on the same day, add the previous one to the class list
                    if current_slot.get('time', None) and current_slot['time'] != time:
                        classes.append(current_slot)
                        prev_day = current_slot['day']
                        current_slot = {}
                        current_slot['venue'] = []
                        current_slot['day'] = prev_day
                    
                    # Update time and venue 
                    current_slot['time'] = time
                    current_slot['venue'].append(venue)
                    
                if len(current_slot) != 0:
                    # Append lase ntr
                    classes.append(current_slot)

            current_course['schedule'] = classes
            result.append(current_course)

        
        return result

    # --- Basic header ---
    header = soup.find("h1")
    title = clean(header.text) if header else ""
    course_id = title[:12]
    title = title[13:]

    # --- Sidebar info (course details) ---
    sidebar = soup.find("table")
    course_info = {}
    if sidebar:
        for row in sidebar.find_all("tr"):
            cols = row.find_all("td")
            if len(cols) >= 2:
                key = clean(cols[0].text)
                val = clean(cols[1].text)
                course_info[key] = val
                
    # print(sidebar)
    semester = course_info.get(get_field_name("semester"), "")
    periodicity = course_info.get(get_field_name("periodicity"), "")
    language = course_info.get(get_field_name("language_of_instruction"), "")
    comment = course_info.get(get_field_name("comment"), "")


    # --- Lecturers ---
    lecturers = get_all_texts(f"td:-soup-contains('{get_field_name('lecturers')}') + td a")



    # --- Classes (Lecture, Exercise, etc.) ---
    classes = []
    courses_table = soup.select_one(f"h3:-soup-contains('{get_field_name('classes')}')").find_next_sibling('table')
    classes = get_schedule(courses_table)
  
    # --- Notes / Remarks ---
    notes = ""
    notes_header = soup.find("h3", string=re.compile("Remarks|Bemerkungen", re.I))
    if notes_header:
        next_el = notes_header.find_next("p")
        if next_el:
            notes = clean(next_el.text)

    # --- Catalogue Data ---
    catalogue_table= soup.select_one(f"h3:-soup-contains('{get_field_name('catalogue_data')}')").find_next_sibling('table')
    catalogue_elems = [ "description",
                        "learning_objectives",
                        "content",
                        "lecture_notes",
                        "literature",
                        "prerequisites"]
    catalogue_data = get_table_elements(catalogue_table, catalogue_elems)[0]

    # --- Performance Assessment ---
    performance_assessment_table= soup.select_one(f"h3:-soup-contains('{get_field_name('performance_assessment')}')").find_next_sibling('table')
    performance_assessment_elems = ["ects_credits", 
                                    "assessment_type", 
                                    "language_of_examination", 
                                    "repetition", 
                                    "examination", 
                                    "additional_info", 
                                    "exam_aid",                                
                                    "regulations",
                                    "examination_block"]
    performance_assessment = get_table_elements(performance_assessment_table, performance_assessment_elems, True)


    # --- Offered in (Programs) ---
    offered_in = []
    offered_table = soup.select_one(f"h3:-soup-contains('{get_field_name('offered_in')}')").find_next_sibling('table')
    for row in offered_table.find_all("tr")[1:]:
        cols = [td for td in row.find_all("td")]
        # print(cols)
        if len(cols) >= 3:
            offered_in.append({
                "program": cols[0].get_text(),
                "section": cols[1].get_text(),
                "type":  cols[2].get_text() #str(cols[2])
            })

    return {
        "course_id": course_id,
        "title": title,
        "semester": semester,
        "periodicity": periodicity,
        "language_of_instruction": language,
        "comment": comment,
        "lecturers": lecturers,
        "classes": classes,
        "notes": notes,
        "catalogue_data": catalogue_data,
        "performance_assessment": performance_assessment,
        "offered_in": offered_in
    }

def scrape_vvz_course_links(language, semester):
    result = []
    index = 1
    response = 0
    while(index < 500):
        print(index)
        url = f"https://www.vvz.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebot.view?lerneinheitscode=&deptId=&famname=&unterbereichAbschnittId=&seite={index}&lerneinheitstitel=&rufname=&kpRange=0,999&lehrsprache=&bereichAbschnittId=&semkez={semester}&studiengangAbschnittId=&studiengangTyp=&ansicht=1&lang=de&katalogdaten=&wahlinfo=&lang={language}"
    
        response = requests.get(url)

        # response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        # print(response.text)
        links = soup.find_all(href=re.compile('.*Vorlesungsverzeichnis/lerneinheit.view.*'))
        if len(links) == 0 :
            break
        links = [DOMAIN + link['href'].replace("LEHRVERANSTALTUNGEN","ALLE").replace(r"lang=\w\w", f"lang={language}") for link in links]
        # making all links have the same language
        links = [re.sub(r"lang=\w\w",  f"lang={language}", url + f"&lang={language}") for url in links]
        result += links
        index +=1
    
    with open(f"links_{semester}_{language}", "w", encoding="utf-8") as f:
        for link in links:
            f.write(link + "\n")
    return result

def scrape_all_courses_from_links(language, semester):
    final_json = []
    urls = []
    with open(f"links_{semester}_{language}", "r", encoding="utf-8") as f:
        urls = f.readlines()

    urls = list(set(urls))    
    print("Number of courses:",len(urls))
    for idx, url in enumerate(urls):
        print(idx)
        result = scrape_vvz_course(url, "en")
        final_json.append(result)
    # print(final_json)
    with open(f"courses_{semester}_{language}.json", "w", encoding="utf-8") as f:
        json.dump(final_json, f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025W&ansicht=ALLE&lerneinheitId=193980&lang=en"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=ALLE&lerneinheitId=188955&lang=en"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025W&ansicht=ALLE&lerneinheitId=194339&lang=de"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025W&ansicht=ALLE&lerneinheitId=193931&lang=de"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=192762&semkez=2025W&ansicht=ALLE&lang=en&lang=en"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=194821&semkez=2025W&ansicht=ALLE&lang=en&lang=en"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lang=en&semkez=2025W&ansicht=ALLE&lerneinheitId=194120&"
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=194612&semkez=2025W&ansicht=ALLE&lang=en&lang=en"
    semester = "2025W"
    language = "en"
    # final_json = scrape_vvz_course(url,language)

    scrape_all_courses_from_links(language, semester)
    # print(final_json)
    # with open(f"result.json", "w", encoding="utf-8") as f:
    #     json.dump(final_json, f, indent=2, ensure_ascii=False)

    # print("✅ Scraping complete. Data saved to result.json")
