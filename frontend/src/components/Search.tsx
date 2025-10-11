import { useEffect, useState } from "react";
import "./Search.css";
import Result from "./Result";
import Recommendation from "./Recommendation";

// TODO: match the actual data from backend
export type Course = {
  name: string
}

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
      {name: `intro to ${query}`},
      {name: `${query} II`},
      {name: `${query} and stuff`},
    ];
    setResults(dummyResults);
  };

  const getRecommendations = () => {
    let dummyRecommendations: Course[] = [
      {name: "cool"},
      {name: "easy"},
      {name: "fun"},
    ];
    setRecommendations(dummyRecommendations);
  }

  return (
    <div className="search">
      <input className="searchbar" placeholder="search" onKeyDown={(e) => (e.key == "Enter") && getSearchResults((e.target as HTMLInputElement).value)}></input>
      {results.length > 0 && <>
        <div className="title">Results</div>
        <div className="results">
          {results.map((course, i) => <Result course={course} key={i}></Result>)}
        </div>
      </>}
      {recommendations.length > 0 && <>
        <div className="title">Recommendations</div>
        <div className="recommendations">
          {recommendations.map((course, i) => <Recommendation course={course} key={i}></Recommendation>)}
        </div>
      </>}
    </div>
  );
}

export default Search;