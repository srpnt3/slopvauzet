import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Studyplan from "./components/Studyplan";
import Schedule from "./components/Schedule";
import Debug from "./components/Debug";

export type Page = "search" | "studyplan" | "schedule" | "debug";

function App() {
  const [page, setPage] = useState<Page>("search");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage}></Navbar>
      {page == "search" && <Search></Search>}
      {page == "studyplan" && <Studyplan></Studyplan>}
      {page == "schedule" && <Schedule></Schedule>}
      {page == "debug" && <Debug></Debug>}
    </div>
  );
};

export default App;
