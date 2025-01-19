import MovieCard from "./MovieCard";

export default function MovieCardList({ movieData,setMovieId,movieId,setModal }) {
  if (!Array.isArray(movieData)) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  return (
    <div className="movie-card-list">
      {movieData.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} movieId={movie.imdbID} setMovieId={setMovieId} setModal={setModal} />
      ))}
    </div>
  );
}
