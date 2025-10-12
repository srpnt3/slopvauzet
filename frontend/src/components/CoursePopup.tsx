import "./CoursePopup.css";
import type { Course } from "./Search";
import Badge from "./Badge.tsx";
import { Fragment, useMemo } from "react";

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

type Section = {
	sectionTitle?: string;
	content: {
		name: string;
		data: string;
	}[];
};

export function formatCouseData(course: Course): Section[] {
	let sections: Section[] = [{
		sectionTitle: "Catalogue Data",
		content: [{
			name: "Abstract",
			data: course.catalogue_data.description || "-",
		}, {
			name: "Learning objective",
			data: course.catalogue_data.learning_objectives || "-",
		}, {
			name: "Content",
			data: course.catalogue_data.content || "-",
		}, {
			name: "Literature",
			data: course.catalogue_data.literature || "-",
		}, {
			name: "Lecturers",
			data: course.lecturers.join(", ") || "-",
		}],
	}, {
		sectionTitle: "Performance Assessment",
		content: [{
			name: "ECTS credits",
			data: (course.performance_assessment[0]?.ects_credits ?? 0) + " credits",
		}, {
			name: "Assessment type",
			data: course.performance_assessment[0]?.assessment_type || "-",
		}, {
			name: "Exam language",
			data: course.performance_assessment[0]?.language_of_examination || "-",
		}, {
			name: "Exam aids",
			data: course.performance_assessment[0]?.exam_aid || "-",
		}],
	}];

	return sections;
}

export default CoursePopup;