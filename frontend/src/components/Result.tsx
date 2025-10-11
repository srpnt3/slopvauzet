import { addCurrentCourse, inCurrentCourses, removeCurrentCourse } from "../util/courses";
import "./Result.css";
import type { Course } from "./Search";
import Symbol from "./Symbol";

function Result({course, setCoursePopup, setCoursesChanged, setHoveredCourse}: {course: Course, setCoursePopup: (course: Course | undefined) => void, setCoursesChanged: (i: number) => void, setHoveredCourse: (course: Course | undefined) => void}) { 
  const toggleAddCourse = (course: Course) => {
    if (!inCurrentCourses(course.id)) {
      addCurrentCourse(course);
      setCoursesChanged(Math.random());
    } else {
      removeCurrentCourse(course.id);
      setCoursesChanged(Math.random());
    }
  };
  
  return (
    <div className="result" onMouseEnter={() => setHoveredCourse(course)} onMouseLeave={() => setHoveredCourse(undefined)}>
      <div className="id">{course.id}</div>
      <div className="name">{course.name}</div>
      <button className={"add " + (inCurrentCourses(course.id) ? "active" : "")} onClick={() => toggleAddCourse(course)}><Symbol>add</Symbol></button>
      <button className="open" onClick={() => setCoursePopup(course)}><Symbol>open_in_new</Symbol></button>
    </div>
  );
}

export default Result;