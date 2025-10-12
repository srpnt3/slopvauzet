import { type JSX } from "react";
import type { Course } from "./Search";
import "./Timetable.css";
import * as React from "react";
import { cn } from "../util/cn.ts";

function Timetable({courses, hoveredCourse}: { courses: Course[], hoveredCourse: Course | undefined }) {
  console.log(hoveredCourse); // look its used

	const renderTimetable = () => { // very cursed lol
		let baseCells: JSX.Element[] = [];
		let weekdays: string[] = ["mon", "tue", "wed", "thu", "fri"];

		baseCells.push(<BaseCell row={1} col={1} key={0}></BaseCell>);
		weekdays.map((d, i) => baseCells.push(
			<BaseCell row={1} col={i + 2} className={`font-medium text-fg2 text-nowrap`} key={"day" + d}>{d}</BaseCell>
		));
		for (let h = 6; h < 20; h++) {
			baseCells.push(
				<BaseCell row={h - 4} col={1} className={`font-medium text-fg2 text-nowrap`} key={"time" + h}>{h.toString().padStart(2, "0")} - {(h + 1).toString().padStart(2, "0")}</BaseCell>
			)
			for (let i = 0; i < 5; i++) {
				baseCells.push(
					<BaseCell row={h - 4} col={i + 2} key={"cell" + h + "," + i}></BaseCell>
				);
			}
		}

		//let abstractCells: Course[][] = baseCells.map(_ => []);
		/*for (let [d, day] of weekdays.entries()) {
			for (let h = 6; h < 20; h++) {
				for (let course of hoveredCourse ? [...courses, hoveredCourse] : courses) {
					for (let class2 of course.classes) {
						for (let schedule of class2.schedule) {
							let startHour = Number(schedule.time.split("-")[0]?.split(":")[0]);
							let endHour = Number(schedule.time.split("-")[1]?.split(":")[0]);
							if (Number(schedule.time.split("-")[1]?.split(":")[1]) == 0) {
								endHour -= 1;
							}

							for (let hour = startHour; hour <= endHour; hour++) {
								if (schedule.day.toLowerCase() == day && hour == h) {
									let i = 7 + ((h - 6) * 6) + d;
									abstractCells[i].push(course);
								}
							}
						}
					}
				}
			}
		}*/

		//console.log(abstractCells);

		/*for (let [i, cellCourses] of abstractCells.entries()) {
			let className = "cell course";
			if (cellCourses.length > 1) className += " conflict";
			if (hoveredCourse && cellCourses.map(c => c.course_id).includes(hoveredCourse.course_id)) className += " hover";
			if (hoveredCourse && courses.map(c => c.course_id).includes(hoveredCourse.course_id) && cellCourses.map(c => c.course_id).includes(hoveredCourse.course_id)) className += " current";

			let title = cellCourses.map(c => c.title).join("\n");
			let count = cellCourses.length;
			if (className.endsWith("current")) count -= 2;

			if (cellCourses.length > 0) baseCells[i] = <div className={className} title={title} key={i}>{count}</div>;
		}*/

		baseCells.push(...courses.map((course, i) =>
			course.classes.map((cls, j) =>
				cls.schedule.map((schedule, k) => {
					let key = `${i}_${j}_${k}`
					let col = convertDay(schedule.day) + 1
					if (col === 0) return <></>
					let rows = convertTime(schedule.time).map(t => t - 4)
					return <CourseCell col={col} startRow={rows[0]} endRow={rows[1]} key={key}>
						{schedule.time}
					</CourseCell>
				})
			)
		).flat(2))

		/*baseCells.push((
			<div className={"row-[9] col-[5] bg-pink-300"}></div>
		))*/

		return baseCells;
	}

	return (
		<div className={"grid w-full h-full min-h-0 p-2 gap-2 text-xs grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] overflow-y-scroll"}>
			{renderTimetable()}
		</div>
	);
}

function BaseCell({row, col, className, children, ...props}: React.ComponentProps<'div'> & { row?: number, col?: number }) {
	return (<div style={{gridRow: row, gridColumn: col}} className={cn("flex items-center justify-center", className)} {...props}>
		{children}
	</div>)
}

function CourseCell({col, startRow, endRow, className, children, ...props}: React.ComponentProps<'div'> & { startRow?: number, endRow?: number, col?: number }) {
	return (<div style={{gridRowStart: startRow, gridRowEnd: endRow, gridColumn: col}} className={cn(
		"flex justify-center rounded-2 bg-bg3",
		className)} {...props}
	>
		{children}
	</div>)
}

function convertTime(time: string): [number, number] {
	return time.split('-').map(t => t.split(":")).map(t => Number.parseInt(t[0]) + ((Number.parseInt(t[1]) >= 30) ? 1 : 0)) as [number, number];
}

function convertDay(day: string): number {
	switch (day) {
		case 'Mon':
			return 1;
		case 'Tue':
			return 2;
		case 'Wed':
			return 3;
		case 'Thu':
			return 4;
		case 'Fri':
			return 5;
		case 'Mon/2':
			return 1;
		case 'Tue/2':
			return 2;
		case 'Wed/2':
			return 3;
		case 'Thu/2':
			return 4;
		case 'Fri/2':
			return 5;
	}
	return -1;
}

export default Timetable;