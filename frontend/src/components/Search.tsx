import { useState } from "react";
import "./Search.css";
import Result from "./Result";

// TODO: match the actual data from backend
export type Course = {
  name: string
}

function Search() {
  const [results, setResults] = useState<Course[]>([]);

  // TODO: hook up to backend, add filter params and stuff
  const getSearchResults = (query: string) => {
    let dummyResults: Course[] = [
      {name: query},
      {name: "abc"},
      {name: "def"},
    ];
    setResults(dummyResults);
  };

  return (
    <div className="search">
      <input className="searchbar" placeholder="search" onKeyDown={(e) => (e.key == "Enter") && getSearchResults((e.target as HTMLInputElement).value)}></input>
      <div className="results">
        {results.map((result, i) => <Result course={result} key={i}></Result>)}
      </div>
    </div>
  );
}

export default Search;