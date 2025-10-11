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
	if (!courses.map(c => c.course_id).includes(course.course_id)) { // todo: check equality properly
		courses.push(course);
		setCurrentCourses(courses);
	}
}

export function removeCurrentCourse(id: string) {
	let courses = getCurrentCourses();
	courses = courses.filter(c => c.course_id != id);
	setCurrentCourses(courses);
}

export function inCurrentCourses(id: string): boolean {
	let courses = getCurrentCourses();
	return courses.map(c => c.course_id).includes(id);
}
