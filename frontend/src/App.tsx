import { useEffect, useState } from "react";
import "./App.css";
import Search, { type Course } from "./components/Search";
import Navbar from "./components/Navbar";
import Studyplan from "./components/Studyplan";
import CoursePopup from "./components/CoursePopup";
import Timetable from "./components/Timetable";
import { getCurrentCourses } from "./util/courses";
import { cn } from "./util/cn.ts";
import Section from "./components/Section.tsx";

function App() {
	const [courses, setCourses] = useState<Course[]>([]);
	const [coursePopup, setCoursePopup] = useState<Course | undefined>(undefined);
	const [coursesChanged, setCoursesChanged] = useState<number>(1); // set to nonzero to force rerender with new localstorage courses
	const [hoveredCourse, setHoveredCourse] = useState<Course | undefined>(undefined);

	// todo: persist in localstorage
	const [level, setLevel] = useState<string>("Bachelor");
	const [department, setDepartment] = useState<string>("D-INFK");
	const [programme, setProgramme] = useState<string>("Computer Science Bachelor");

	useEffect(() => {
		if (coursesChanged == 0) return;
		setCourses(getCurrentCourses());
		setCoursesChanged(0);
	}, [coursesChanged]);

	const exportCsv = async (courses: Course[]) => {
		let csv = await fetch("/api/convertcsv", {
			method: "POST",
			body: JSON.stringify(courses),
		}).then(res => res.text());

		csv = csv.replaceAll("\\n", "\n");
		csv = csv.replaceAll('\\"', '\"');
		csv = csv.substring(1, csv.length - 2);

		const file = new Blob([csv], {type: "text/csv"});
		const a = document.createElement('a');
		a.style.display = "none";
		a.href = URL.createObjectURL(file);
		a.download = `timetable.csv`;
		document.body.appendChild(a);
		a.click();
	}

	return (
		<div className={cn("flex flex-col app px-16 gap-8 pb-12")}>
			<Navbar level={level} setLevel={setLevel} department={department} setDepartment={setDepartment} programme={programme} setProgramme={setProgramme}></Navbar>
			<main className="main w-full h-full min-h-0">
				<div className="w-[43%] overflow-hidden flex flex-col gap-6">
					<Section title={"Study Profile"} action={"edit"} className={"w-full min-h-56"}>
						<Studyplan info={level + ", " + department + ", " + programme}></Studyplan>
					</Section>
					<Section action={"show hidden"} title={"Timetable"} className={"h-full overflow-hidden min-h-0"}>
						<Timetable courses={courses} hoveredCourse={hoveredCourse}></Timetable>
					</Section>
				</div>
				<div className="w-[57%] overflow-hidden">
					<button className="ml-auto" onClick={() => exportCsv(courses)}>export csv</button>
					<Search setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse} programme={programme}></Search>
				</div>
			</main>
			{coursePopup && <CoursePopup course={coursePopup} setCoursePopup={setCoursePopup}></CoursePopup>}
		</div>
	);
};

export default App;
