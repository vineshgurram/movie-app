import { useState } from 'react'
import Search from './components/Search'
import MovieCardList from './components/MovieCardList';

function App() {
const [movieData, setmovieData] = useState([]);
  return (
    <>
    <Search movieData={movieData} setmovieData={setmovieData} />
    <MovieCardList movieData={movieData} />
    </>
  )
}

export default App
