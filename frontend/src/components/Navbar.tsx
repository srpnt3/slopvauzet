import "./Navbar.css";
import { type Page } from "../App";
import Symbol from "./Symbol";

function Navbar({page, setPage}: {page: Page, setPage: (page: Page) => void}) {
  return (
    <nav className="navbar">
      <button className="navbutton left"><Symbol>menu</Symbol></button>
      <a className={`navlink ${page == "search" ? "active" : ""}`} onClick={() => setPage("search")}>Search</a>
      <a className={`navlink ${page == "studyplan" ? "active" : ""}`} onClick={() => setPage("studyplan")}>Studyplan</a>
      <a className={`navlink ${page == "schedule" ? "active" : ""}`} onClick={() => setPage("schedule")}>Schedule</a>
      <button className="navbutton right"><Symbol>light_mode</Symbol></button>
    </nav>
  );
}

export default Navbar;