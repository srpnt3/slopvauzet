import type { JSX } from "react";
import type { Course } from "./Search";
import "./Timetable.css";

function Timetable({courses, hoveredCourse}: { courses: Course[], hoveredCourse: Course | undefined }) {

	const renderTimetable = () => {
		const debug = "(" + courses.length + ") " + (hoveredCourse?.course_id ?? "");
		const cells: JSX.Element[] = [];
		[debug, "mon", "tue", "wed", "thu", "fri"].map(d => cells.push(<div className="cell day" key={d}>{d}</div>));
		for (let h = 8; h < 22; h++) {
			cells.push(<div className="cell time" key={h}>{h.toString().padStart(2, "0")} - {(h + 1).toString().padStart(2, "0")}</div>)
			for (let i = 0; i < 5; i++) {
				cells.push(<div className="cell" key={h + "" + i}></div>);
			}
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