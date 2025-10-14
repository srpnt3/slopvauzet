import "./Result.css";
import type { Course } from "./Search";
import Badge from "./Badge.tsx";
import { ArrowUpRightIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { cn } from "../util/cn.ts";

function Result({course, setCoursePopup, setHoveredCourse, courses, setCourses}: { course: Course, setCoursePopup: (course: Course | undefined) => void, setHoveredCourse: (course: Course | undefined) => void, courses: Course[], setCourses: (courses: Course[]) => void }) {
	const toggleAddCourse = (course: Course, added: boolean) => {
		if (!added) {
			setCourses([...courses, course]);
		} else {
			setCourses(courses.filter(c => c.course_id != course.course_id));
		}
	};

	// console.log(course.tags)

	const added = courses.map(c => c.course_id).includes(course.course_id);

	return (
		<div className="flex flex-col py-4 gap-2 border-t border-bor mr-3" onMouseEnter={() => setHoveredCourse(course)} onMouseLeave={() => setHoveredCourse(undefined)}>
			<div className="flex flex-row justify-between items-center">
				<div className={"flex flex-row gap-4"}>
					<Badge className={"px-0"}>{course.course_id}</Badge>
					<Badge className={"px-0"}>{course.offered_in[0].section}</Badge>
					<Badge className={"px-0"}>{course.performance_assessment[0].ects_credits}kp</Badge>
				</div>
				<span className={"grow"}></span>
				<div className={"flex flex-row gap-4"}>
					<button onClick={() => toggleAddCourse(course, added)} className={cn("h-6 w-6 flex justify-center items-center rounded-2", added ? "border border-bor" : "bg-bg3 text-fg3")}>{added ? <MinusIcon weight={"bold"} size={16}/> : <PlusIcon weight={"bold"} size={16}/>}</button>
					<button onClick={() => setCoursePopup(course)} className={"h-6 w-6 flex justify-center items-center"}><ArrowUpRightIcon weight={"regular"} size={24}/></button>
				</div>
			</div>
			<h3 className="text-lg font-medium pt-2">{course.title}</h3>
			<div className="flex flex-row gap-2">
				{course.tags?.slice(0, 5).map(tag => <Badge className={"border border-bor"}>{tag}</Badge>)}
			</div>
		</div>
	);
}

export default Result;