import React, { useEffect, useState } from "react";
import "./Detail.css";

const Detail = (props) => {
  const api_key = "c45a857c193f6302f2b5061c3b85e743";
  const url = "https://api.themoviedb.org/3";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const bgimg_url = "https://image.tmdb.org/t/p/original";

  const id = props.getMovie.id;
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`${url}/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(`${url}/movie/${id}/credits?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setCast(data.cast));
  }, [id]);

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="detail-container">
      <div className="main-section">
        <div className="left-section">
          <img  className="poster" src={`${img_url}${movie.poster_path}`}  alt={movie.title} />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p className="rating">Rating : {movie.vote_average}</p>
            <p className="genres">
              {movie.runtime && <span>{movie.runtime} min</span>}{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </p>
            <p className="release">
              Release Date : {new Date(movie.release_date).toDateString()}
            </p>
            <h3>Overview</h3>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>

        <div
          className="right-section"
          style={{
            backgroundImage: `url(${bgimg_url}${movie.backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="cast-section">
        <h3>Cast</h3>
        <div className="cast-grid">
          {cast.map((c) => (
            <div className="cast-card" key={c.id}>
              <img src={ c.profile_path ? `${img_url}${c.profile_path}`: "/fallback.png" } alt={c.name} />
              <div className="cast-info">
                <h4>{c.name}</h4>
                <p>{c.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
