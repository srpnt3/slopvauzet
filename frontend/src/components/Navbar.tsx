import { useEffect, useState } from "react";
import { cn } from "../util/cn.ts";
import { deps, levelz, listUniversityDegrees } from "../util/uni_degrees.ts";

function Navbar({level, setLevel, department, setDepartment, programme, setProgramme}: { level: string, setLevel: (level: string) => void, department: string, setDepartment: (department: string) => void, programme: string, setProgramme: (programme: string) => void }) {
	const levels = levelz;
	const departments = deps;
	const [programmes, setProgrammes] = useState(listUniversityDegrees);

	const getProgrammes = async () => {
		let prog = await fetch(`/api/programs?department=${department}&level=${level}`).then(res => res.json());
		setProgrammes(prog);
	};

	useEffect(() => {
		getProgrammes();
	}, [level, department]);

	return (
		<nav className={cn("h-14 flex flex-row items-center gap-16 justify-start w-full text-base shrink-0", level)}>
			<span className={"font-extrabold w-32"}>VVZ ++</span>
			<div className="navselect">
				<span className={"text-fg2"}>level : </span>
				<select style={{textOverflow: "ellipsis \"...\"" }} className={"font-medium max-w-72 truncate"} value={level} onChange={(e) => setLevel(e.target.value)}>
					{levels.map(s => <option value={s} key={s}>{s === "" ? "None" : s}</option>)}
				</select>
			</div>
			<div className="m-0">
				<span className={"text-fg2"}>department : </span>
				<select style={{textOverflow: "ellipsis \"...\"" }} className={"font-medium max-w-72 truncate"} value={department} onChange={(e) => setDepartment(e.target.value)}>
					{departments.map(s => <option value={s} key={s}>{s === "" ? "None" : s}</option>)}
				</select>
			</div>
			<div className="m-0">
				<span className={"text-fg2"}>programme : </span>
				<select style={{textOverflow: "ellipsis \"...\"" }} className={"font-medium max-w-72 truncate"} value={programme} onChange={(e) => setProgramme(e.target.value)}>
					{programmes.map(s => <option value={s} key={s}>{s === "" ? "None" : s}</option>)}
				</select>
			</div>
		</nav>
	);
}

export default Navbar;