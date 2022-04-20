import React from "react";
import {Link} from "react-router-dom"
import Rating from "./Rating";
const MovieCard = ({ movie, deleteHAndler, handleDone }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie-description/${movie.id}`}>
        <p>{movie.name}</p>
      </Link>
      <Rating value={movie.rating} precision={0.5} />
      <img src={movie.image} alt="movie" />
      <p className="date">{movie.date}</p>
    

      <button onClick={() => deleteHAndler(movie.id)}>Remove</button>
      <button onClick={() => handleDone(movie.id)}>
        {" "}
        {movie.isDone ? "Good Job" : "Done"}{" "}
      </button>
     
    </div>
  );
};

export default MovieCard;

