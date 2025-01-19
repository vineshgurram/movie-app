export default function MovieCard({ movie, movieId, setMovieId, setModal }) {
  const openModal = (e) => {
    setModal(true);
    setMovieId(movie.imdbID);
  };
  return (
    <div className="movie-card-box" onClick={(e) => openModal(e)}>
      <div className="img-box">
        <img
          src={
            movie.Poster == "N/A"
              ? "https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
              : movie.Poster
          }
          alt={movie.Title}
        />
      </div>
      <div className="detail-box">
        <h3 className="title">{movie.Title}</h3>
        <p className="year">{movie.Year}</p>
      </div>
    </div>
  );
}
