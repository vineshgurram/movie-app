import MovieCard from "./MovieCard";

export default function MovieCardList({ movieData }) {
  if (!Array.isArray(movieData)) {
    return <div><Error /></div>;
  }
  return (
    <div className="movie-card-list">
      {movieData.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}
