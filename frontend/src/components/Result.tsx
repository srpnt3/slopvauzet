import "./Result.css";
import type { Course } from "./Search";
import Symbol from "./Symbol";

function Result({course, setCoursePopup}: {course: Course, setCoursePopup: (course: Course | undefined) => void}) {
  return (
    <div className="result">
      <div className="id">{course.id}</div>
      <div className="name">{course.name}</div>
      <button className="popup" onClick={() => setCoursePopup(course)}><Symbol>open_in_new</Symbol></button>
    </div>
  );
}

export default Result;