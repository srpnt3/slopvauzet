import type { JSX } from "react";
import type { Course } from "./Search";
import "./Timetable.css";

function Timetable({courses}: {courses: Course[]}) {
  
  const renderTimetable = () => {
    let cells: JSX.Element[] = [];
    ["(" + courses.length + ")", "mon", "tue", "wed", "thu", "fri"].map(d => cells.push(<div className="cell day">{d}</div>));
    for (let h=8; h<22; h++) {
      cells.push(<div className="cell time">{h.toString().padStart(2, "0")} - {(h+1).toString().padStart(2, "0")}</div>)
      for (let i=0; i<5; i++) {
        cells.push(<div className="cell"></div>);
      }
    }
    
    return cells;
  }

  return (
    <div className="timetable">
      {renderTimetable()}
    </div>
  );
}

export default Timetable;