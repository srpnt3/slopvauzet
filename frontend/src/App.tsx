import { useEffect, useState } from "react";
import "./App.css";
import Search, { type Course } from "./components/Search";
import Navbar from "./components/Navbar";
import Studyplan from "./components/Studyplan";
import CoursePopup from "./components/CoursePopup";
import Timetable from "./components/Timetable";
import { getCurrentCourses } from "./util/courses";

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

  return (
    <div className="app">
      <Navbar level={level} setLevel={setLevel} department={department} setDepartment={setDepartment} programme={programme} setProgramme={setProgramme}></Navbar>
      <main className="main">
        <div className="infoColumn">
          <div className="title">Study Profile</div>
          <Studyplan info={level + ", " + department + ", " + programme}></Studyplan>
          <div className="title">Timetable</div>
          <Timetable courses={courses} hoveredCourse={hoveredCourse}></Timetable>
        </div>
        <div className="searchColumn">
          <Search setCoursePopup={setCoursePopup} setCoursesChanged={setCoursesChanged} setHoveredCourse={setHoveredCourse}></Search>
        </div>
      </main>
      {coursePopup && <CoursePopup course={coursePopup} setCoursePopup={setCoursePopup}></CoursePopup>}
    </div>
  );
};

export default App;
