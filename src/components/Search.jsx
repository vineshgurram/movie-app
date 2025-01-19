import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function Search({ setmovieData }) {
  const [query, setQuery] = useState("Batman");
  // const searchQuery = query.trim() === "" ? "Batman" : query;
  useEffect(() => {
    async function fetchMovieDetails() {
      if (!query.trim()) {
        setmovieData([]);
        return;
      }
      try {
        const fetchResult = await fetch(`${URL}?s=${query}&apiKey=${API_KEY}`);
        const fetchResponse = await fetchResult.json();
        setmovieData(fetchResponse.Search || []);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setmovieData([]);
      }
    }
    fetchMovieDetails();
  }, [query]);
  return (
    <div className="search-box-wrapper">
      <h2 className="tag-line">Search your favorite movie</h2>
      <form className="search-box">
        <div className="input-box">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Movie, Series and many more ..."
            className="input-field"
          />
        </div>
      </form>
    </div>
  );
}
