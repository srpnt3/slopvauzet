import "./Navbar.css";
import Symbol from "./Symbol";

function Navbar({level, setLevel, department, setDepartment, programme, setProgramme}: {level: string, setLevel: (level: string) => void, department: string, setDepartment: (department: string) => void, programme: string, setProgramme: (programme: string) => void}) {
  const levels = ["Bachelor", "Master", "Phd"];
  const departments = ["D-INFK", "D-MATH"];
  const programmes = ["Computer Science Bachelor"]

  return (
    <nav className="navbar">
      <button className="navbutton left"><Symbol>menu</Symbol></button>
      <div className="navselect">
        <span>level: </span>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          {levels.map(s => <option value={s} key={s}>{s}</option>)}
        </select>
      </div>
      <div className="navselect">
        <span>department: </span>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map(s => <option value={s} key={s}>{s}</option>)}
        </select>
      </div>
      <div className="navselect">
        <span>programme: </span>
        <select value={programme} onChange={(e) => setProgramme(e.target.value)}>
          {programmes.map(s => <option value={s} key={s}>{s}</option>)}
        </select>
      </div>
      <button className="navbutton right"><Symbol>light_mode</Symbol></button>
    </nav>
  );
}

export default Navbar;