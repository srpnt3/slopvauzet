import type { Course } from "./Search";
import Badge from "./Badge.tsx";
import { Fragment, useMemo } from "react";

function CoursePopup({course, setCoursePopup}: { course: Course, setCoursePopup: (course: Course | undefined) => void }) {

	const courseData = useMemo(() => formatCouseData(course), [course]);

	return (
		<div className="w-full h-full min-h-0">
			<button className="font-medium text-base mb-2" onClick={() => setCoursePopup(undefined)}>{"<-"} back</button>
			<div className="font-medium text-[4rem] mb-6">{course.title}</div>
			<div className="flex flex-row gap-2 mb-14">
		  		<Badge className={"bg-bg2"}>{course.course_id}</Badge>
				<Badge title={course.offered_in[0].section} className={"bg-bg3 text-fg3"}>{course.offered_in[0].section}</Badge>
				<Badge className={"bg-bg3 text-fg3"}>{course.performance_assessment[0].ects_credits}kp</Badge>
			</div>
			<div className="flex flex-col gap-12 overflow-y-scroll">
				{courseData.map((s, i) => (<div key={i}>
					{s.sectionTitle && <h2 className={"ml-48 mb-4 font-medium"}>{s.sectionTitle}</h2>}
					<div className={"w-full max-w-[64rem] grid grid-cols-[10rem_auto] gap-x-8 gap-y-4"}>
						{s.content.map((c, i) => (<Fragment key={i}>
							<div className={"text-xs text-fg2"}>{c.name}</div>
							<div className={"text-xs"}>{c.data}</div>
						</Fragment>))}
					</div>
				</div>))}
			</div>
		</div>
	);
}

export function formatCouseData(course: Course): {
	sectionTitle?: string;
	content: {
		name: string;
		data: string;
	}[]
}[] {
	return [{
		sectionTitle: "Catalogue Data",
		content: [{
			name: "Abstract",
			data: "This lecture provides deeper knowledge on the possible applications of  virtual reality, its basic technolgy, and future research fields. The  goal is to provide a strong knowledge on Virtual Reality for a possible  future use in business processes."
		},
			{
				name: "Abstract",
				data: "This lecture provides deeper knowledge on the possible applications of  virtual reality, its basic technolgy, and future research fields. The  goal is to provide a strong knowledge on Virtual Reality for a possible  future use in business processes."
			}]
	}]
}

export default CoursePopup;