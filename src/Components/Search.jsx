import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Search = ({ query, setMovie }) => {
  
  const [movies, setMovies] = useState([]);
  const api_key = "c45a857c193f6302f2b5061c3b85e743";
  const url = "https://api.themoviedb.org/3";
  const img_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (!query) return;
    fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, [query]);

  const handleClick = (movie) => {
    setMovie({ id: movie.id });
};
  

  return (
    <div className="movie-grid">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
             <Link to={`/movie/${movie.id}`  }  onClick={()=>handleClick( movie)} >
            <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p></Link>
          </div>
        ))
      ) : (
        <p style={{ padding: "2rem", color: "white" }}>No results found....</p>
      )}
    </div>
  );
};

export default Search;
