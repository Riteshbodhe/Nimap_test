import React from 'react';

const MovieCard = ({ movie }) => {
  const img_url = "https://image.tmdb.org/t/p/w500"; 

  return (
    <div className="movie-card">
      <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;

