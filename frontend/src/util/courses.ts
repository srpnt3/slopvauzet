// utils for getting/setting current courses in Currentstorage

import type { Course } from "../components/Search";

export function getCurrentCourses(): Course[] {
	return JSON.parse(localStorage.getItem("courses") || "[]");
}

export function setCurrentCourses(courses: Course[]) {
	localStorage.setItem("courses", JSON.stringify(courses));
}

export function addCurrentCourse(course: Course) {
	let courses = getCurrentCourses();
	if (!courses.map(c => c.name).includes(course.name)) { // todo: check equality properly
		courses.push(course);
		setCurrentCourses(courses);
	}
}

export function removeCurrentCourse(id: string) {
	let courses = getCurrentCourses();
	courses = courses.filter(c => c.name != id);
	setCurrentCourses(courses);
}
