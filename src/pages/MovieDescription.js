import React from 'react'
import {useMatch } from 'react-router-dom'

function MovieDescription({allMovies}) {

    const match = useMatch("/movie-description/:id");

    var indexOfFilm = allMovies.findIndex(function(post, index) {
        if(post.id == match.params.id)
        return true;
    });


    let stars = []
    for (let i=0 ; i<allMovies[indexOfFilm].rating ; i++){
        stars.push("★")
    }
    let movieRating = stars.join("").padEnd(5,"☆")

    return (
        <div className='movie-description'>
            <h1>{allMovies[indexOfFilm].name}</h1>
            <div style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}>{movieRating}</div>
            <p>{allMovies[indexOfFilm].description}</p>
            <iframe 
            width="600" 
            height="300" 
            src={allMovies[indexOfFilm].trailerLink} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}

export default MovieDescription





















