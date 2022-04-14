import MovieCard from "./MovieCard";

const MovieList = ({ movie, deleteHAndler, handleDone, search, rating }) => {
    console.log("movie", movie);
    return (
      <div className="movie-list">
        <div className="movie-list-container" >
        {movie
          .filter(
            (el) =>
              el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
              el.rating >= rating
          )
          .map((e, i) => (
            <MovieCard
              movie={e}
              key={i}
              deleteHAndler={deleteHAndler}
              handleDone={handleDone}
            />
          ))}
          </div>
      </div>
    );
  };
  export default MovieList;