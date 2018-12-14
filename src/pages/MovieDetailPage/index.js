import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./MovieDetailPage.scss";

class MovieDetailPage extends Component {
  render() {
    let { movie } = this.props.location.state;
    console.log(movie);
    return (
      <div className="movie_detail_container">
        <div className="poster">
          <img
            src={"http://image.tmdb.org/t/p/w300/" + movie.poster_path}
            alt="Poster"
          />
        </div>
        <div className="information">
          <h1>{movie.title}</h1>
          <h2>{movie.vote_average}</h2>
          <h3>{movie.overview}</h3>
          <button className="like_button">Like</button>
        </div>
      </div>
    );
  }
}

export default MovieDetailPage;
