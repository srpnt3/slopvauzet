import "./CoursePopup.css";
import type { Course } from "./Search";
import Symbol from "./Symbol";

function CoursePopup({course, setCoursePopup}: {course: Course, setCoursePopup: (course: Course | undefined) => void}) {
  return (
    <div className="coursePopup">
      <button className="back" onClick={() => setCoursePopup(undefined)}><Symbol>arrow_back</Symbol> back</button>
      <div className="title">{course.title}</div>
      <div className="info">
        <span className="item id">{course.course_id}</span>
        <span className="item">{course.offered_in[0].section}</span>
        <span className="item">{course.performance_assessment[0].ects_credits}KP</span>
      </div>
      <div className="body">
        {JSON.stringify(course)}
      </div>
    </div>
  );
}

export default CoursePopup;