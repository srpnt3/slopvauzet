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

  // todo: persist in localstorage
  const [level, setLevel] = useState<string>("Bachelor");
  const [department, setDepartment] = useState<string>("D-INFK");
  const [programme, setProgramme] = useState<string>("Computer Science Bachelor");

  useEffect(() => {
    setCourses(getCurrentCourses());
  }, []);

  return (
    <div className="app">
      <Navbar level={level} setLevel={setLevel} department={department} setDepartment={setDepartment} programme={programme} setProgramme={setProgramme}></Navbar>
      <main className="main">
        <div className="infoColumn">
          <div className="title">Study Profile</div>
          <Studyplan info={level + ", " + department + ", " + programme}></Studyplan>
          <div className="title">Timetable</div>
          <Timetable courses={courses}></Timetable>
        </div>
        <div className="searchColumn">
          <Search setCoursePopup={setCoursePopup}></Search>
        </div>
      </main>
      {coursePopup && <CoursePopup course={coursePopup} setCoursePopup={setCoursePopup}></CoursePopup>}
    </div>
  );
};

export default App;
