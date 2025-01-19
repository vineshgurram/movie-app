import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function MovieDetail({ movieId }) {
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    async function fetchMovieDetail() {
      const fetchDetail = await fetch(
        `${URL}?i=${movieId}&plot=full&apikey=${API_KEY}`
      );
      const detailResponse = await fetchDetail.json();
      setMovieDetail(detailResponse);
      console.log(detailResponse);
    }
    fetchMovieDetail();
  }, [movieId]);
  return (
    <div className="movie-detail-box">
      <div className="img-box">
        <img src={movieDetail.Poster} alt="" />
      </div>
      <div className="detail-box">
        <h3 className="title">
          {movieDetail.Title} ({movieDetail.Year})
        </h3>
        <p><span className="bold">Genre </span>: {movieDetail.Genre}</p>
        <p><span className="bold">Rating </span>: {movieDetail.imdbRating}</p>
        <p><span className="bold">Date of Released </span>: {movieDetail.Released}</p>
        <p><span className="bold">Director </span>: {movieDetail.Director}</p>
        <p><span className="bold">Writer </span>: {movieDetail.Writer}</p>
        <p><span className="bold">Actors </span>: {movieDetail.Actors}</p>
        <p><span className="bold">Plot </span>: {movieDetail.Plot}</p>
        <p><span className="bold">Awards </span>: {movieDetail.Awards}</p>
      </div>
    </div>
  );
}
