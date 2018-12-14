import React from "react";

import "./MovieItem.scss";

function MovieItem(props) {
  let { poster_path } = props.movie;
  return (
    <div className="movie_container">
      <img src={"http://image.tmdb.org/t/p/w300/" + poster_path} alt="Poster" />
    </div>
  );
}

export default MovieItem;
