import "./CoursePopup.css";
import type { Course } from "./Search";
import Symbol from "./Symbol";

function CoursePopup({course, setCoursePopup}: {course: Course, setCoursePopup: (course: Course | undefined) => void}) {
  return (
    <div className="coursePopup" onClick={() => setCoursePopup(undefined)}>
      <div className="courseInfo" onClick={(e) => e.stopPropagation()}>
        <div className="id">{course.course_id}</div>
        <div className="title">{course.title}</div>
        <button className="close" onClick={() => setCoursePopup(undefined)}><Symbol>close</Symbol></button>
      </div>
    </div>
  );
}

export default CoursePopup;