import { useEffect, useState } from "react";
import "./Search.css";
import Result from "./Result";
import { exampleCourses } from "../util/exampleData";

export type Course = {
	course_id: string,
	title: string,
	semester: string,
	periodicity: string,
	language_of_instruction: string,
	comment?: string,
	lecturers: string[],
	classes: {
		type: string,
		hours_per_week: number,
		notes: string,
		schedule: {
			day: string,
			time: string,
			venue: string[],
		}[],
	}[],
	notes: string,
	catalogue_data: {
		description: string,
		learning_objectives: string,
		content?: string,
		lecture_notes?: string,
		literature?: string,
		prerequisites?: string,
	},
	performance_assessment: {
		ects_credits: number,
		assessment_type?: string,
		language_of_examination?: string,
		repetition?: string,
		examination?: string,
		additional_info?: string,
		exam_aid?: string,
		assessment_description: string,
		regulations?: string,
	}[],
	offered_in: {
		program: string,
		section: string,
		type: string,
	}[],
};

export type Filters = {
	programme: string,
	section: string,
	day: string,
};

function Search({setCoursePopup, setCoursesChanged, setHoveredCourse}: { setCoursePopup: (course: Course | undefined) => void, setCoursesChanged: (i: number) => void, setHoveredCourse: (course: Course | undefined) => void }) {
	const [results, setResults] = useState<Course[]>([]);
	const [recommendations, setRecommendations] = useState<Course[]>([]);
	const [filters, _setFilters] = useState<Filters>({programme: "", section: "", day: ""});

	useEffect(() => {
		getRecommendations();
	}, []);

	// TODO: hook up to backend, add filter params and stuff
	const getSearchResults = async (query: string, filters: Filters) => {
		if (!query) {
			setResults([]);
			return;
		}

		let results = await fetch(`/api/search?query=${query}&filters=${JSON.stringify(filters)}`).then(res => res.json());
		setResults(results.slice(0, 100));
	};

	const getRecommendations = () => {
		let dummyRecommendations: Course[] = exampleCourses.slice(20, 23);
		setRecommendations(dummyRecommendations);
	}

	return (
		<div className="search">
			<div className="h-64 w-full flex justify-center items-start pt-16 min-h-32">
				<input className="rounded-2 border border-bor text-base px-6 py-2.5 w-[512px]" placeholder="Course ID / Course Name" onKeyDown={(e) => (e.key == "Enter") && getSearchResults((e.target as HTMLInputElement).value, filters)}></input>
			</div>
			<div className="w-full overflow-y-auto">
				{results.length > 0 && <>
					<h2 className="text-xs text-fg2 pb-3">course number / category / kp / course name / tags</h2>
					{results.map((course, i) => <Result course={course} setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse} key={i}></Result>)}
				</>}
				{recommendations.length > 0 && <>
					<h2 className={"text-base font-medium pb-2"}>Recommendations</h2>
					{recommendations.map((course, i) => <Result course={course} setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse} key={i}></Result>)}
				</>}
			</div>
		</div>
	);
}

export default Search;