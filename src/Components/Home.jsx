import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";


const Home = (props) => {
  const api_key = "c45a857c193f6302f2b5061c3b85e743";
  const url = "https://api.themoviedb.org/3";
  const img_url = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies();
  }, [page]);

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch( `${url}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch movies...", error);
    }
  };
  const handleClick = (movie) => {
    props.setMovie(movie);
};
 
  return (
    <>
   

<div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`} onClick={() => handleClick(movie)}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    
     
<Pagination page={page} setPage={setPage} />

</>
  );
};

export default Home;
