import type { Course } from "./Search";
import "./Timetable.css";

function Timetable({courses}: {courses: Course[]}) {
  return (
    <div className="timetable">
      <div>todo timetable here {courses.length} courses here do put here {courses.length} of them</div>
    </div>
  );
}

export default Timetable;