import {Routes, Route } from "react-router-dom";
import {Films} from './Film'
import React, { useState } from "react";
import MovieDescription from "./pages/MovieDescription";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Home from "./components/Home";

const App = () => {
  const [films, setFilms] = useState([...Films]);

  const addFilms = (film) => {
   setFilms([...films,film])
 };

    return (
       <div className="App">
         <Routes>
         <Route path="/" element={<Home allMovies={films} />} />
         <Route path="/movie-description/:id" element={<MovieDescription allMovies={films}  />} />
         <Route path="/add-new-movie" element={<AddMovie handleAdd={addFilms} />} />
 
        </Routes>
         
     </div>
   );
   }
  
export default App ;

