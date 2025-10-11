import { cn } from "../util/cn.ts";

function Navbar({level, setLevel, department, setDepartment, programme, setProgramme}: { level: string, setLevel: (level: string) => void, department: string, setDepartment: (department: string) => void, programme: string, setProgramme: (programme: string) => void }) {
	const levels = ["Bachelor", "Master", "Phd"];
	const departments = ["D-INFK", "D-MATH"];
	const programmes = ["Computer Science Bachelor"]

	return (
		<nav className={cn("h-14 flex flex-row items-center gap-16 justify-start w-full text-sm", level)}>
			<span className={"font-extrabold w-32"}>VVZ++</span>
			<div className="navselect">
				<span className={"text-fg2"}>level : </span>
				<select value={level} onChange={(e) => setLevel(e.target.value)}>
					{levels.map(s => <option value={s} key={s}>{s}</option>)}
				</select>
			</div>
			<div className="m-0">
				<span className={"text-fg2"}>department : </span>
				<select value={department} onChange={(e) => setDepartment(e.target.value)}>
					{departments.map(s => <option value={s} key={s}>{s}</option>)}
				</select>
			</div>
			<div className="m-0">
				<span className={"text-fg2"}>programme : </span>
				<select value={programme} onChange={(e) => setProgramme(e.target.value)}>
					{programmes.map(s => <option value={s} key={s}>{s}</option>)}
				</select>
			</div>
		</nav>
	);
}

export default Navbar;