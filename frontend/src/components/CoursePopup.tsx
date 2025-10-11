import "./CoursePopup.css";
import type { Course } from "./Search";

function CoursePopup({course}: {course: Course}) {
  return (
    <div className="coursePopup">
      <div>{course.name}</div>
    </div>
  );
}

export default CoursePopup;