import "./Result.css";
import type { Course } from "./Search";

function Result({course}: {course: Course}) {
  return (
    <div className="result">
      <div>{course.name}</div>
    </div>
  );
}

export default Result;