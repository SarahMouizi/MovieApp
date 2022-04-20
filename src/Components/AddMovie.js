import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddMovie = ({ handleAdd }) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");
 



  return (
    <div className="add-movie-form">
      <h2>Add Movie </h2>

      <input
        type="text"
        placeholder="movie's name"
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="movie's date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="movie's rating"
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="movie's image"
        onChange={(e) => setImage(e.target.value)}
      />
      
      
      <Link to={'/'}><button onClick={() =>     handleAdd({
      isDone: false,
      id: Math.random(),
      name: input,
      image: image,
      rating: rating,
      date: date,
      MovieDescription : "",
      trailerLink : " ",
    
    })}>Add Movie</button></Link>
    </div>
  );
};

export default AddMovie;