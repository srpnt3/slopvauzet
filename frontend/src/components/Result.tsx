import { addCurrentCourse, inCurrentCourses, removeCurrentCourse } from "../util/courses";
import "./Result.css";
import type { Course } from "./Search";
import Symbol from "./Symbol";

function Result({course, setCoursePopup, setCoursesChanged, setHoveredCourse}: {course: Course, setCoursePopup: (course: Course | undefined) => void, setCoursesChanged: (i: number) => void, setHoveredCourse: (course: Course | undefined) => void}) { 
  const toggleAddCourse = (course: Course) => {
    if (!inCurrentCourses(course.course_id)) {
      addCurrentCourse(course);
      setCoursesChanged(Math.random());
    } else {
      removeCurrentCourse(course.course_id);
      setCoursesChanged(Math.random());
    }
  };
  
  return (
    <div className="result" onMouseEnter={() => setHoveredCourse(course)} onMouseLeave={() => setHoveredCourse(undefined)}>
      <div className="info">
        <span className="item">{course.course_id}</span>
        <span className="item">{course.offered_in[0].section}</span>
        <span className="item">{course.performance_assessment[0].ects_credits}KP</span>
        <button className={"add " + (inCurrentCourses(course.course_id) ? "active" : "")} onClick={() => toggleAddCourse(course)}><Symbol>add</Symbol></button>
        <button className="open" onClick={() => setCoursePopup(course)}><Symbol>open_in_new</Symbol></button>
      </div>
      <div className="title">
        {course.title}
      </div>
      <div className="tags">
        <div className="tag">performance</div>
        <div className="tag">hardware</div>
        <div className="tag">optimization</div>
      </div>
    </div>
  );
}

export default Result;