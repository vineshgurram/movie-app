import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;


export default function Search({setmovieData}) {
  const [query, setQuery] = useState("minion");
  useEffect(()=>{
    async function fetchMovieDetails(){
        const fetchResult = await fetch(`${URL}?s=${query}&apiKey=${API_KEY}`);
        const fetchResponse = await fetchResult.json();
        setmovieData(fetchResponse.Search);
    }
    fetchMovieDetails();
  },[query]);
  return (
    <div className="search-box-wrapper">
      <form className="search-box">
        <div className="input-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-field"
        />
        </div>
      </form>
    </div>
  );
}
