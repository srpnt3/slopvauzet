import type { JSX } from "react";
import type { Course } from "./Search";
import "./Timetable.css";

function Timetable({courses, hoveredCourse}: {courses: Course[], hoveredCourse: Course | undefined}) {
  
  const renderTimetable = () => { // very cursed lol
    let cells: JSX.Element[] = [];
    let weekdays: string[] = ["mon", "tue", "wed", "thu", "fri"];

    cells.push(<div className="cell" key={0}></div>);
    weekdays.map(d => cells.push(<div className="cell day" key={"day" + d}>{d}</div>));
    for (let h=6; h<20; h++) {
      cells.push(<div className="cell time" key={"time" + h}>{h.toString().padStart(2, "0")}-{(h+1).toString().padStart(2, "0")}</div>)
      for (let i=0; i<5; i++) {
        cells.push(<div className="cell" key={"cell" + h + "," + i}></div>);
      }
    }

    let abstractCells: Course[][] = cells.map(_ => []);
    for (let [d, day] of weekdays.entries()) {
      for (let h=6; h<20; h++) {
        for (let course of hoveredCourse ? [...courses, hoveredCourse] : courses) {
          for (let class2 of course.classes) {
            for (let schedule of class2.schedule) {
              let startHour = Number(schedule.time.split("-")[0]?.split(":")[0]);
              let endHour = Number(schedule.time.split("-")[1]?.split(":")[0]);
              if (Number(schedule.time.split("-")[1]?.split(":")[1]) == 0) {
                endHour -= 1;
              }

              for (let hour=startHour; hour<=endHour; hour++) {
                if (schedule.day.toLowerCase() == day && hour == h) {
                  let i = 7 + ((h-6)*6) + d;
                  abstractCells[i].push(course);
                }
              }
            }
          }
        }
      }
    }

    for (let [i, cellCourses] of abstractCells.entries()) {
      let className = "cell course";
      if (cellCourses.length > 1) className += " conflict";
      if (hoveredCourse && cellCourses.map(c => c.course_id).includes(hoveredCourse.course_id)) className += " hover";
      if (hoveredCourse && courses.map(c => c.course_id).includes(hoveredCourse.course_id) && cellCourses.map(c => c.course_id).includes(hoveredCourse.course_id)) className += " current";

      let title = cellCourses.map(c => c.title).join("\n");
      let count = cellCourses.length;
      if (className.endsWith("current")) count -= 2;

      if (cellCourses.length > 0) cells[i] = <div className={className} title={title} key={i}>{count}</div>;
    }
    
    return cells;
  }

	return (
		<div className="timetable h-full p-2">
			{renderTimetable()}
		</div>
	);
}

export default Timetable;