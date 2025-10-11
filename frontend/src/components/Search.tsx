import { useEffect, useState } from "react";
import "./Search.css";
import Result from "./Result";
import Symbol from "./Symbol";
import { exampleCourses } from "../util/exampleData";

export type Course = {
  course_id: string,
  title: string,
  semester: string,
  periodicity: string,
  language_of_instruction: string,
  comment?: string,
  lecturers: string[],
  classes: {
    type: string,
    hours_per_week: number,
    notes: string,
    schedule: {
      day: string,
      time: string,
      venue: string[],
    }[],
  }[],
  notes: string,
  catalogue_data: {
    description: string,
    learning_objectives: string,
    content?: string,
    lecture_notes?: string,
    literature?: string,
    prerequisites?: string,
  },
  performance_assessment: {
    ects_credits: number,
    assessment_type?: string,
    language_of_examination?: string,
    repetition?: string,
    examination?: string,
    additional_info?: string,
    exam_aid?: string,
    assessment_description: string,
    regulations?: string,
  }[],
  offered_in: {
    program: string,
    section: string,
    type: string,
  }[],
};

export type Filters = {
  credits: number,
};

function Search({setCoursePopup, setCoursesChanged, setHoveredCourse}: {setCoursePopup: (course: Course | undefined) => void, setCoursesChanged: (i: number) => void, setHoveredCourse: (course: Course | undefined) => void}) {
  const [results, setResults] = useState<Course[]>([]);
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [filters, _setFilters] = useState<Filters>({credits: 0});

  useEffect(() => {
    getRecommendations();
  }, []);

  // TODO: hook up to backend, add filter params and stuff
  const getSearchResults = (query: string, _filters: Filters) => {
    if (!query) {
      setResults([]);
      return;
    }
    let dummyResults: Course[] = exampleCourses.slice(0, 20);
    setResults(dummyResults);
  };

  const getRecommendations = () => {
    let dummyRecommendations: Course[] = exampleCourses.slice(20, 23);
    setRecommendations(dummyRecommendations);
  }

  return (
    <div className="search">
      <div className="searchbar_container">
        <input className="searchbar" placeholder="Course ID / Course Name" onKeyDown={(e) => (e.key == "Enter") && getSearchResults((e.target as HTMLInputElement).value, filters)}></input>
        <button className="filters"><Symbol>tune</Symbol></button>
      </div>
      <div className="results">
        {results.length > 0 && <>
          <div className="title">Results</div>
          {results.map((course, i) => <Result course={course} setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse} key={i}></Result>)}
        </>}
        {recommendations.length > 0 && <>
          <div className="title">Recommendations</div>
          {recommendations.map((course, i) => <Result course={course} setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse} key={i}></Result>)}
        </>}
      </div>
    </div>
  );
}

export default Search;