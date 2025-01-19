import { useState } from "react";
import Search from "./components/Search";
import MovieCardList from "./components/MovieCardList";
import Container from "./components/Container";
import Section from "./components/Section";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [movieData, setmovieData] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [modal, setModal] = useState(false);

  // const openModal = function(){
  //   setModal(true);
  // }

  return (
    <>
      <Header className={"header"} />
      <Main>
        <Section className="movie-list-section">
          <Container>
            <Search movieData={movieData} setmovieData={setmovieData} />
            <MovieCardList
              setMovieId={setMovieId}
              movieId={movieId}
              movieData={movieData}
              setModal={setModal}
            />
          </Container>
        </Section>
      </Main>
      {
        modal && <Modal movieId={movieId} setModal={setModal} />
      }
      
    </>
  );
}

export default App;
