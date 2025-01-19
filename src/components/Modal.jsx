import MovieDetail from "./MovieDetail";

export default function Modal({ movieId, setModal }) {
  const closeModal = function () {
    setModal(false);
  };
  return (
    <>
      <div className="modal">
        <button className="close-btn" onClick={(e) => closeModal(e)}>
          CLOSE
        </button>
        {/* <h3 className="title">
            Movie Information
        </h3> */}
        <MovieDetail movieId={movieId} />
      </div>
      <div className="overlay"></div>
    </>
  );
}
