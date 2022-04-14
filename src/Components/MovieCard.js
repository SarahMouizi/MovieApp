import React from "react";
import Rating from "react-rating-stars-component";
const MovieCard = ({ movie, deleteHAndler, handleDone }) => {
  return (
    <div className="movie-card">
      <p>{movie.name}</p>
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

