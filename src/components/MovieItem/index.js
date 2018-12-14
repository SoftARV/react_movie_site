import React from "react";

import "./MovieItem.scss";

function MovieItem(props) {
  let { title, poster_path } = props.movie;
  return (
    <div className="movie_container">
      {poster_path === null ? (
        <div className="poster">
          <h1>{title}</h1>
        </div>
      ) : (
        <img
          src={"http://image.tmdb.org/t/p/w300/" + poster_path}
          alt="Poster"
        />
      )}
    </div>
  );
}

export default MovieItem;
