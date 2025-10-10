import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Studyplan from "./components/Studyplan";
import Schedule from "./components/Schedule";

export type Page = "search" | "studyplan" | "schedule";

function App() {
  const [page, setPage] = useState<Page>("search");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage}></Navbar>
      {page == "search" && <Search></Search>}
      {page == "studyplan" && <Studyplan></Studyplan>}
      {page == "schedule" && <Schedule></Schedule>}
    </div>
  );
};

export default App;
