import fs from "node:fs";

let courses = JSON.parse(fs.readFileSync("./courses_2025W_en.json"));
let tags = JSON.parse(fs.readFileSync("../slopathon/tags.json"));

let tagSet = new Map();
for (let [k, v] of Object.entries(tags)) {
	let tagList = v.split(",");
	tagSet.set(k, tagList);
}

for (let course of courses) {
	course.tags = tagSet.get(course.title) || [];
}

fs.writeFileSync("./courses_tagged.json", JSON.stringify(courses, null, 2));
