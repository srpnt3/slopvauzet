import json
import pandas as pd
import numpy as np
from thefuzz import process, fuzz

# helper functions
def convert_time_to_int(time_string: str) -> tuple:
    individual_times = time_string.split(sep='-')
    hour_minute = [time.split(':') for time in individual_times]
    result = [int(hm[0]) + (int(hm[1])>=30) for hm in hour_minute]
    return result

# read data and clean it up for filtering and fuzzy search
def read_and_process_json(semester_courses_path) -> pd.DataFrame:
    with open(semester_courses_path, encoding="utf8") as f:
        data = json.load(f)
        # logger.info(str(data))

        for el in data:
            for keys, value in el['catalogue_data'].items():
                el['catalogue_data'][keys]=el['catalogue_data'][keys].replace("\n", ' ')

    df = pd.json_normalize(data)
    df = df.fillna('')
    df['lecturers_alt'] = df['lecturers'].apply(lambda x: ', '.join(x))
    df['main_schedule'] = df['classes'].apply(lambda lst: lst[0])
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    df['main_schedule_day'] = df['main_schedule'].apply(lambda dic: [entry['day'].lower() for entry in dic['schedule'] if entry['day'] in days])
    df['main_schedule_days_time'] = df['main_schedule'].apply(lambda dic: [(entry['day'].lower(), convert_time_to_int(entry['time'])) for entry in dic['schedule'] if entry['day'] in days])
    df['programs'] = df['offered_in'].apply(lambda dic: [doc['program'] for doc in dic])
    df['program_section_pairs'] = df['offered_in'].apply(lambda dic: [(doc['program'], doc['section']) for doc in dic])

    cols_to_combined = [
        'course_id',
        'title',
        'lecturers_alt',
        'catalogue_data.description',
        'catalogue_data.learning_objectives', 
        'catalogue_data.content',
        'catalogue_data.literature', 
        'catalogue_data.lecture_notes',
        'catalogue_data.prerequisites'
    ]

    df['combined_cols'] = df[cols_to_combined].agg(' '.join,axis=1)
    return df

# fuzzy search algorithm with weights: 1/3*title + 1/3*combined + 1/3*lecturer
def fuzzy_search(df: pd.DataFrame, query: str) -> np.ndarray:
    extract_title = np.array(process.extract(query, df['title'], scorer=fuzz.partial_ratio, limit=100))
    extract_cols = np.array(process.extract(query, df['combined_cols'], scorer=fuzz.partial_ratio, limit=100))
    extract_lecturers = np.array(process.extract(query, df['lecturers_alt'], scorer=fuzz.partial_ratio, limit=100))
    # Create score dictionaries
    title_scores = {int(extract_title[i, 2]): float(extract_title[i, 1]) for i in range(len(extract_title))}
    cols_scores = {int(extract_cols[i, 2]): float(extract_cols[i, 1]) for i in range(len(extract_cols))}
    lecturers_scores = {int(extract_lecturers[i, 2]): float(extract_lecturers[i, 1]) for i in range(len(extract_lecturers))}

    # Get all unique indices
    all_indices = set(title_scores.keys()).union(set(cols_scores.keys())).union(set(lecturers_scores.keys()))
    
    # Calculate weighted scores and create results
    weighted_results = []
    for idx in all_indices:
        title_acc = title_scores.get(idx, 0)
        cols_acc = cols_scores.get(idx, 0)
        lecturers_acc = lecturers_scores.get(idx, 0)
        
        # Weighted average: title 33%, combined_cols 33%, lecturers 33%
        weighted_acc = 0.33 * title_acc + 0.33 * cols_acc + 0.33 * lecturers_acc
        
        # Use title as the match string
        match_str = df.loc[idx]['title']
        
        weighted_results.append((match_str, weighted_acc, idx))

    # Sort by weighted accuracy (descending)
    weighted_results.sort(key=lambda x: x[1], reverse=True)
    return np.array(weighted_results)[:,2]


### Format for the filter
#
# filter_criteria = {
#     'day': '',
#     'hour': '',
#     'programme': '',
#     'section': '',
#     'semester': ''
# }
#
def filter_by_criteria(df: pd.DataFrame, filter_criteria: dict) -> pd.DataFrame:
    result = df
    # filter by programme
    if filter_criteria.get('programme', None) :
        result = result[[filter_criteria['programme'] in doc for doc in result['programs']]]
    
    # filter by (programme, section) pairs
    if filter_criteria.get('section', None) :
        result = result[[(filter_criteria['programme'],filter_criteria['section']) in doc for doc in result['program_section_pairs']]]
    
    # filter by (day, [start,...]) pairs
    if filter_criteria.get('day', None):
        truth_vec = [any([(filter_criteria['day'] == pair[0]) and (convert_time_to_int(filter_criteria['hour'])[0]==pair[1][0]) for pair in schedule]) for schedule in result['main_schedule_days_time']]
        result = result[truth_vec]
    
    return result


# main function to be passed
def search(df: pd.DataFrame, query: str, filter_criteria: dict):
   filtered = filter_by_criteria(df, filter_criteria=filter_criteria).reset_index(drop=True)
   indices = fuzzy_search(filtered, query=query)
   og_keys = ['course_id', 'title', 'semester', 'periodicity',
      'language_of_instruction', 'comment', 'lecturers', 'classes', 'notes',
      'performance_assessment', 'offered_in', 'catalogue_data']
   
   catalogue_prefix = 'catalogue_data.'
   catalogue_columns = [col for col in df.columns if col.startswith(catalogue_prefix)]
    
   if not catalogue_columns:
      print("No catalogue_data columns found with the specified prefix.")
      return df
   
   # Extract base column names (remove the prefix)
   base_columns = [col.replace(catalogue_prefix, '') for col in catalogue_columns]
   
   # Create a copy of the original dataframe to avoid modifying the original
   result_df = df.copy()
   
   # Reconstruct the catalogue_data object for each row
   catalogue_data_list = []
   
   for idx, row in df.iterrows():
      catalogue_obj = {}
      
      for base_col in base_columns:
         full_col_name = f"{catalogue_prefix}{base_col}"
         if full_col_name in df.columns and pd.notna(row[full_col_name]):
               catalogue_obj[base_col] = row[full_col_name]
      
      catalogue_data_list.append(catalogue_obj)
   
   # Add the reconstructed catalogue_data column
   result_df['catalogue_data'] = catalogue_data_list
   
   # Remove the flattened columns
   result_df = result_df.drop(columns=catalogue_columns)

   return [result_df[og_keys].iloc[i].to_dict() for i in range(len(indices))]
