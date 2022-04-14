import MovieList from "./Components/MovieList";
import { Film } from './Film';
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Search from "./Components/Search";
import Rating from "./Components/Rating";
import "./App.css";

function App() {
  const [movie, setMovie] = useState(Film);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(1);
  const deleteHAndler = (ID) => {
    setMovie(movie.filter((e) => e.id !== ID));
  };
  const handleDone = (ID) => {
    setMovie(
      movie.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const handleAdd = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  // Search
  //const handleSearch=(e)=>{}

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <p className="intro">Sharing a few of our favourite movies</p>
      <MovieList
        movie={movie}
        deleteHAndler={deleteHAndler}
        handleDone={handleDone}
        handleAdd={handleAdd}
        search={search}
        rating={rating}
      />
      <hr />
      <p>Add Movie </p>
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;

