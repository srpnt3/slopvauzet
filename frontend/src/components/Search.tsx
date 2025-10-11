import { useEffect, useState } from "react";
import "./Search.css";
import Result from "./Result";
import Symbol from "./Symbol";

// TODO: match the actual data from backend
export type Course = {
  id: string,
  name: string,
};

export type Filters = {
  credits: number,
};

function Search() {
  const [results, setResults] = useState<Course[]>([]);
  const [recommendations, setRecommendations] = useState<Course[]>([]);

  useEffect(() => {
    getRecommendations();
  }, []);

  // TODO: hook up to backend, add filter params and stuff
  const getSearchResults = (query: string) => {
    if (!query) {
      setResults([]);
      return;
    }
    let dummyResults: Course[] = [
      {id: "100", name: `intro to ${query}`},
      {id: "101", name: `${query} II`},
      {id: "102", name: `${query} and stuff`},
    ];
    setResults(dummyResults);
  };

  const getRecommendations = () => {
    let dummyRecommendations: Course[] = [
      {id: "200", name: "cool"},
      {id: "201", name: "easy"},
      {id: "202", name: "fun"},
    ];
    setRecommendations(dummyRecommendations);
  }

  return (
    <div className="search">
      <div className="searchbar_container">
        <input className="searchbar" placeholder="Course ID / Course Name" onKeyDown={(e) => (e.key == "Enter") && getSearchResults((e.target as HTMLInputElement).value)}></input>
        <button className="filters"><Symbol>tune</Symbol></button>
      </div>
      <div className="results">
        {results.length > 0 && <>
          <div className="title">Results</div>
          {results.map((course, i) => <Result course={course} key={i}></Result>)}
        </>}
        {recommendations.length > 0 && <>
          <div className="title">Recommendations</div>
          {recommendations.map((course, i) => <Result course={course} key={i}></Result>)}
        </>}
      </div>
    </div>
  );
}

export default Search;