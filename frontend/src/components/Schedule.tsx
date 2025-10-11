import { useState, useEffect } from "react";
import { getCurrentCourses, removeCurrentCourse } from "../util/courses";
import "./Schedule.css";
import type { Course } from "./Search";
import Timetable from "./Timetable";
import Symbol from "./Symbol";

function Schedule() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(getCurrentCourses());
  }, []);

  return (
    <div className="schedule">
      <Timetable courses={courses}></Timetable>
      <div className="courselist">
        {courses.map((course) => <div className="course">
          <div className="id">{course.id}</div>
          <div className="name">{course.name}</div>
          <button className="delete" onClick={() => {removeCurrentCourse(course.id); setCourses(getCurrentCourses())}}><Symbol>delete</Symbol></button>
        </div>)}
      </div>
    </div>
  );
}

export default Schedule;