import "./Navbar.css";
import { type Page } from "../App";

function Navbar({page, setPage}: {page: Page, setPage: (page: Page) => void}) {
  return (
    <nav className="navbar">
      <button className={`navbutton ${page == "search" && "active"}`} onClick={() => setPage("search")}>Search</button>
      <button className={`navbutton ${page == "studyplan" && "active"}`} onClick={() => setPage("studyplan")}>Studyplan</button>
      <button className={`navbutton ${page == "schedule" && "active"}`} onClick={() => setPage("schedule")}>Schedule</button>
    </nav>
  );
}

export default Navbar;