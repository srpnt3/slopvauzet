"""
Scrape programme IDs from the ETH VVZ page:

For each Level and Department option, this script selects them in the web UI,
waits for the "Programm" selector to update, and collects the option 'value'
attributes (these are the "programm IDs" you asked for).

Requirements:
  pip install selenium webdriver-manager

Usage:
  python scrape_eth_vvz_programs.py

Notes:
 - The script uses Selenium to run a real browser because the page populates
   the "Programm" selector with JavaScript when you change Level/Department.
 - If the site detects headless browsers, set HEADLESS = False to see the browser.
 - Results are printed as JSON and saved to `programm_ids_by_level_department.json`.
"""

import json
import re
import time
from collections import defaultdict

from selenium import webdriver
from selenium.common.exceptions import TimeoutException, NoSuchElementException, StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options

# -------- CONFIG --------
START_URL = "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebotPre.view?lang=en"
HEADLESS = True
WAIT_TIMEOUT = 12  # seconds for waiting ajax/population
DELAY_BETWEEN_ACTIONS = 0.15  # small polite delay between interactions
OUTPUT_FILE = "programm_ids_by_level_department.json"
# ------------------------

def find_select_by_label_text(driver, label_text_substring):
    """
    Find a <select> element on the page whose associated label contains label_text_substring
    (case-insensitive). Handles common layouts where <label for="id"> precedes the select
    or the label and select are siblings inside same container.
    """
    label_text_substring = label_text_substring.lower()
    # Strategy 1: find <label> elements that contain text then look for the select with matching 'for'
    labels = driver.find_elements(By.XPATH, "//label")
    for lab in labels:
        try:
            txt = lab.text.strip().lower()
        except StaleElementReferenceException:
            continue
        if label_text_substring in txt:
            # try 'for' attribute
            for_attr = lab.get_attribute("for")
            if for_attr:
                try:
                    sel = driver.find_element(By.ID, for_attr)
                    if sel.tag_name.lower() == "select":
                        return sel
                except NoSuchElementException:
                    pass
            # else, maybe select is next sibling or descendant
            try:
                sel = lab.find_element(By.XPATH, ".//following::select[1]")
                return sel
            except NoSuchElementException:
                pass

    # Strategy 2: fallback by searching selects and inspect surrounding text
    selects = driver.find_elements(By.XPATH, "//select")
    for sel in selects:
        try:
            # look for preceding text nodes / labels up the DOM tree
            ancestor = sel.find_element(By.XPATH, "ancestor-or-self::*[1]")
            # check previous sibling label or text
            prev_text = ""
            try:
                prev = sel.find_element(By.XPATH, "preceding::label[1]")
                prev_text = prev.text.strip().lower()
            except NoSuchElementException:
                prev_text = ""
            if label_text_substring in prev_text:
                return sel
        except Exception:
            continue

    # final fallback: attempt to match by common id/name keywords
    keyword_map = {
        "level": ["level", "degree", "studiengangstufe", "stufe"],
        "department": ["department", "departmentid", "departmentId", "departement", "faculty", "inst"],
        "programm": ["programm", "program", "programme", "studyprogram", "studiengang"]
    }
    for sel in selects:
        idn = (sel.get_attribute("id") or "").lower()
        name = (sel.get_attribute("name") or "").lower()
        combined = idn + " " + name
        if any(k in combined for k in keyword_map.get(label_text_substring.lower(), [])):
            return sel

    return None

def safe_select_option(select_element, value_or_index):
    s = Select(select_element)
    try:
        if isinstance(value_or_index, int):
            s.select_by_index(value_or_index)
        else:
            s.select_by_value(value_or_index)
    except Exception:
        try:
            s.select_by_visible_text(value_or_index)
        except Exception:
            # last resort: click option via JS
            driver = select_element.parent  # not reliable, so instead use JS later where needed
            pass

def extract_option_values(select_element):
    opts = select_element.find_elements(By.TAG_NAME, "option")
    values = []
    for o in opts:
        v = o.get_attribute("value")
        # include also textual IDs if value empty (rare)
        if (v is None or v.strip() == "") and o.text:
            v = o.text.strip()
        values.append(v)
    return values

def wait_for_programm_update(driver, previous_values):
    """
    Wait until the list of options in the 'Programm' select differs from previous_values,
    or until at least one non-empty option appears.
    """
    try:
        WebDriverWait(driver, WAIT_TIMEOUT).until(
            lambda d: True  # we'll implement own polling below
        )
    except TimeoutException:
        pass

    # polling
    end_time = time.time() + WAIT_TIMEOUT
    while time.time() < end_time:
        try:
            curr_values = extract_option_values(prog_select)
        except Exception:
            curr_values = []
        if curr_values != previous_values and len(curr_values) > 0:
            return curr_values
        time.sleep(0.15)
    return extract_option_values(prog_select)

if __name__ == "__main__":
    # Setup Chrome driver
    chrome_opts = Options()
    if HEADLESS:
        chrome_opts.add_argument("--headless=new")
    chrome_opts.add_argument("--disable-gpu")
    chrome_opts.add_argument("--no-sandbox")
    chrome_opts.add_argument("--window-size=1600,1000")
    chrome_service = ChromeService(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=chrome_service, options=chrome_opts)

    try:
        driver.get(START_URL)
        time.sleep(1.2)  # let initial scripts run

        # Locate the selects
        level_select_el = find_select_by_label_text(driver, "Level")
        dept_select_el = find_select_by_label_text(driver, "Department")
        prog_select = find_select_by_label_text(driver, "Programm") or find_select_by_label_text(driver, "Program")

        if not level_select_el or not dept_select_el or not prog_select:
            print("Could not find one or more of the selects on the page. "
                  "Falling back to selecting the first three <select> elements found.")
            selects = driver.find_elements(By.XPATH, "//select")
            if len(selects) >= 3:
                level_select_el, dept_select_el, prog_select = selects[0], selects[1], selects[2]
            else:
                raise RuntimeError("Not enough <select> elements found: page structure might be different.")

        level_sel = Select(level_select_el)
        dept_sel = Select(dept_select_el)

        result = defaultdict(lambda: defaultdict(list))

        # iterate level options
        level_options = level_sel.options
        for li, level_option in enumerate(level_options):
            level_value = level_option.get_attribute("value") or level_option.text.strip()
            level_text = level_option.text.strip()
            # skip empty placeholder options
            if not level_value or level_value.strip() == "" or level_text.lower().startswith("choose") or level_text.lower().startswith("please"):
                continue

            # select level
            try:
                level_sel.select_by_value(level_value)
            except Exception:
                try:
                    level_sel.select_by_visible_text(level_text)
                except Exception:
                    level_sel.select_by_index(li)
            time.sleep(DELAY_BETWEEN_ACTIONS)

            # iterate department options for this level
            # after selecting a level, department options may be re-populated => re-find & rewrap Select
            dept_select_el = find_select_by_label_text(driver, "Department")
            if not dept_select_el:
                dept_select_el = find_select_by_label_text(driver, "Departement")  # alternate spelling
            dept_sel = Select(dept_select_el)

            for di, dept_option in enumerate(dept_sel.options):
                dept_value = dept_option.get_attribute("value") or dept_option.text.strip()
                dept_text = dept_option.text.strip()
                if not dept_value or dept_value.strip() == "" or dept_text.lower().startswith("choose") or dept_text.lower().startswith("please"):
                    continue

                # select department
                try:
                    dept_sel.select_by_value(dept_value)
                except Exception:
                    try:
                        dept_sel.select_by_visible_text(dept_text)
                    except Exception:
                        dept_sel.select_by_index(di)
                # dispatch change in case page listens to events
                try:
                    driver.execute_script("arguments[0].dispatchEvent(new Event('change', {bubbles:true}));", dept_select_el)
                except Exception:
                    pass

                time.sleep(DELAY_BETWEEN_ACTIONS)

                # wait until programm select updates
                previous = []
                try:
                    previous = extract_option_values(prog_select)
                except Exception:
                    previous = []
                curr_values = wait_for_programm_update(driver, previous)

                # extract IDs from option values
                # The user asked for "programm IDs that appear in the selector of the Programm"
                # We'll return raw 'value' attributes. Additionally, try to extract numeric ids with a regex.
                raw_values = curr_values
                # normalize / filter: remove empty or placeholder entries
                raw_values = [v for v in raw_values if v and v.strip() != "" and not v.strip().lower().startswith("choose")]
                # Optionally extract numeric IDs
                numeric_ids = []
                for v in raw_values:
                    # try to find the first numeric token inside the value/text
                    m = re.search(r"\d{3,}", v)  # at least 3 digits (adjust if needed)
                    if m:
                        numeric_ids.append(m.group(0))
                    else:
                        numeric_ids.append(v)

                result[level_text][dept_text] = numeric_ids

                # small pause before next department
                time.sleep(0.08)

            # small pause before next level
            time.sleep(0.2)

        # Convert defaultdict to normal dict for JSON
        normal_result = {lvl: dict(depts) for lvl, depts in result.items()}

        # Save and print
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(normal_result, f, indent=2, ensure_ascii=False)

        print(json.dumps(normal_result, indent=2, ensure_ascii=False))
        print(f"\nSaved results to {OUTPUT_FILE}")

    finally:
        driver.quit()
