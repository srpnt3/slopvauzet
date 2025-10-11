import "./Recommendation.css";
import type { Course } from "./Search";

function Recommendation({course}: {course: Course}) {
  return (
    <div className="recommendation">
      <div>{course.name}</div>
    </div>
  );
}

export default Recommendation;