import "./Debug.css";
import type { Course } from "./Search";
import { setCurrentCourses } from "../util/courses";

function Debug() {
  const addTestCourses = () => {
    let testCourses: Course[] = [];
    for (let i=0; i<8; i++) {
      let id = Math.floor(Math.random() * 999999).toString();
      testCourses.push({id: id, name: id});
    }
    setCurrentCourses(testCourses);
  };

  const clearCourses = () => {
    setCurrentCourses([]);
  };

  return (
    <div className="debug">
      <button onClick={() => addTestCourses()}>populate current courses</button>
      <button onClick={() => clearCourses()}>clear current courses</button>
    </div>
  );
}

export default Debug;