import MovieList from "./MovieList";
import {Link} from 'react-router-dom'
import Search from "./Search";
import React, { useState } from "react";

function Home({allMovies}) {
  const [movie, setMovie] = useState(allMovies);
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

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <p className="intro">Sharing a few of our favourite movies</p>
      <Link to="/add-new-movie"><button>Add Movie</button></Link>
      <MovieList
        movie={movie}
        deleteHAndler={deleteHAndler}
        handleDone={handleDone}
        handleAdd={handleAdd}
        search={search}
        rating={rating}
      />
    </div>
  );
}

export default Home;