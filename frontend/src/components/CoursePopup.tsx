import "./CoursePopup.css";
import type { Course } from "./Search";
import Badge from "./Badge.tsx";
import { useMemo } from "react";

function CoursePopup({course, setCoursePopup}: { course: Course, setCoursePopup: (course: Course | undefined) => void }) {

	const courseData = useMemo(() => formatCouseData(course), [course]);

	return (
		<div className="coursePopup w-full h-full min-h-0">
			<button className="font-medium text-base mb-2" onClick={() => setCoursePopup(undefined)}>{"<-"} back</button>
			<div className="font-medium text-[4rem] mb-6">{course.title}</div>
			<div className="flex flex-row gap-2 mb-14">
		  		<Badge className={"bg-bg2"}>{course.course_id}</Badge>
				<Badge title={course.offered_in[0].section} className={"bg-bg3 text-fg3"}>{course.offered_in[0].section}</Badge>
				<Badge className={"bg-bg3 text-fg3"}>{course.performance_assessment[0].ects_credits}kp</Badge>
			</div>
			<div className="grid grid-cols-2 overflow-y-scroll">
				{courseData.map((item, index) => (
					<div key={index}>{item.sectionTitle}</div>
				))}
			</div>
		</div>
	);
}

export function formatCouseData(course: Course): {
	sectionTitle: string;
	content: {
		name: string;
		data: string;
	}[]
}[] {
	return []
}

export default CoursePopup;