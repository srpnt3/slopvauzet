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
    
    
    "classes":                  {"en": "Classes",                                        "de": "Veranstaltungen"},
    "type":                     {"en": "Class type",                                     "de": "Art der Veranstaltung"},
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
    
    # Correct names
    "performance_assessment":   {"en": "Performance assessment",                         "de": "Leistungskontrolle"},
    "ects_credits":             {"en": "ECTS credits",                                   "de": "ECTS Kreditpunkte	"},
    "assessment_type":          {"en": "Type",                                           "de": "Form"},
    "language_of_examination":  {"en": "Language of examination",                        "de": "Prüfungssprache"},
    "repetition":               {"en": "Repetition",                                     "de": "Repetition"},
    "examination":              {"en": "Mode of examination",                            "de": "Prüfungsmodus"},
    "additional_info":          {"en": "Additional information on mode of examination",  "de": "Zusatzinformation zum Prüfungsmodus	"},
    "exam_aid":                 {"en": "Written aids",                                   "de": "Hilfsmittel schriftlich	"},
    
    # Correct names
    "offered_in":               {"en": "Offered in",                                     "de": "Angeboten in"},
    "program":                  {"en": "Programme",                                      "de": "Studiengang"},
    "section":                  {"en": "Section",                                        "de": "Bereich"},
    "type":                     {"en": "Type",                                           "de": "Typ"}
}
custom_parser = {
    "ects_credits": (lambda ects: int(re.search(r"\d+", ects.get_text()).group()) if re.search(r"\d+", ects.get_text()) else None)
}

def scrape_vvz_course(url, language_site):
    response = requests.get(url)

    while(response.status_code != 200):
        print(response.status_code)
        response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    # --- Helpers ---
    def clean(text):
        return re.sub(r"\s+", " ", text.strip()) if text else ""
    
    def get_field_name(field):
        return json_format[field][language_site]
    def get_text(selector):
        el = soup.select_one(selector)
        return el.get_text(strip=True) if el else ""

    def get_all_texts(selector):
        return [el.get_text(strip=True) for el in soup.select(selector)]
    
    def get_table_elements(table, elements, table_inner_headers=False):
        result = []
        partial_result = {}
        ass_desc =""
        for row in next(table.children):
            row_els = row.children
            # print(len(row_els))
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
            # print(field, index)
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


    # --- Basic header ---
    header = soup.find("h1")
    title = clean(header.text) if header else ""

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
    course_id = course_info.get("Course Catalogue Number", "")
    semester = course_info.get("Semester", "")
    periodicity = course_info.get("Periodicity", "")
    language = course_info.get("Language of instruction", "")
    ects = course_info.get("ECTS Credits", "")

    # --- Lecturers ---
    lecturers = get_all_texts(f"td:-soup-contains('{get_field_name('lecturers')}') + td a")



    # --- Classes (Lecture, Exercise, etc.) ---
    classes = []
    # TODO: Finish classes
    # table = soup.find("h3", string="Courses").find_next("table")
    # while table:
    #     class_type_row = table.find_previous("h4")  # heading above the table, e.g., "Lecture" or "Exercise / Tutorial (U)"
    #     class_type_text = clean(class_type_row.text) if class_type_row else "Class"

    #     # Extract hours per week from the text if present
    #     hours_match = re.search(r"(\d+)\s*h", class_type_text)
    #     hours = int(hours_match.group(1)) if hours_match else None

    #     schedule = []
    #     for row in table.find_all("tr")[1:]:  # skip header row
    #         cols = [clean(td.get_text()) for td in row.find_all("td")]
    #         if len(cols) >= 3:
    #             schedule.append({
    #                 "day": cols[0],
    #                 "time": cols[1],
    #                 "venue": cols[2].replace(" »", "")  # clean up trailing chars
    #             })

    #     if schedule:
    #         classes.append({
    #             "type": class_type_text,
    #             "hours_per_week": hours,
    #             "schedule": schedule
    #         })

    #     # move to the next table after the current one
    #     table = table.find_next("table")

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
                        "literature"]
    catalogue_data = get_table_elements(catalogue_table, catalogue_elems)[0]

    # --- Performance Assessment ---
    performance_assessment_table= soup.select_one(f"h3:-soup-contains('{get_field_name('performance_assessment')}')").find_next_sibling('table')
    performance_assessment_elems = ["ects_credits", 
                                    "assessment_type", 
                                    "language_of_examination", 
                                    "repetition", 
                                    "examination", 
                                    "additional_info", 
                                    "exam_aid"]
    performance_assessment = get_table_elements(performance_assessment_table, performance_assessment_elems, True)


    # --- Offered in (Programs) ---

    def get_offered_in(table, elements, table_inner_headers=False):
        result = []
        partial_result = {}
        ass_desc =""
        for row in next(table.children):
            row_els = row.children
            # print(len(row_els))
            name = next(row_els).get_text(strip=True)
            field = next(row_els, None)
            if(field == None):
                if len(partial_result) > 0:
                    if table_inner_headers: 
                        partial_result["assessment_description"] = ass_desc
                    result.append(partial_result)
                ass_desc = name
                partial_result = {}
                continue

            index = [elem for i, elem in enumerate(elements) if (get_field_name(elem) == name)]
            print(field, index)
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

    # performance_assessment_table= soup.select_one(f"h3:-soup-contains('{get_field_name('offered_in')}')").find_next_sibling('table')
    # performance_assessment_elems = ["ects_credits", 
    #                                 "assessment_type", 
    #                                 "language_of_examination", 
    #                                 "repetition", 
    #                                 "examination", 
    #                                 "additional_info", 
    #                                 "exam_aid"]
    # performance_assessment = get_table_elements(performance_assessment_table, performance_assessment_elems, True)


    offered_in = []
    offered_table = soup.select_one(f"h3:-soup-contains('{get_field_name('offered_in')}')").find_next_sibling('table')
    # if offered_table:
    # print("OFFERED IN\n\n\n\n")
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
    url = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lang=en&semkez=2025W&ansicht=ALLE&lerneinheitId=194120&"
    semester = "2025W"
    language = "en"
    scrape_vvz_course_links(language, semester)



    # print("✅ Scraping complete. Data saved to result.json")
