import React, { Component } from "react";
import { connect } from "react-redux";
import { likeMovie } from "../../shared/actions/like_actions";
import "./MovieDetailPage.scss";

class MovieDetailPage extends Component {
  _likeMovie = () => {
    let { movie } = this.props.location.state;
    this.props.likeMovie(movie);
  };

  render() {
    let { movie } = this.props.location.state;
    return (
      <div className="movie_detail_container">
        <div className="poster">
          <div className="movie_container">
            {movie.poster_path === null ? (
              <div className="poster">
                <h1>{movie.title}</h1>
              </div>
            ) : (
              <img
                src={"http://image.tmdb.org/t/p/w300/" + movie.poster_path}
                alt="Poster"
              />
            )}
          </div>
        </div>
        <div className="information">
          <h1>{movie.title}</h1>
          <h2>Rating: {movie.vote_average}</h2>
          <h3>{movie.overview}</h3>
          <h4>Release Date: {movie.release_date}</h4>
          <button className="like_button" onClick={this._likeMovie}>
            Like
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { likeMovie }
)(MovieDetailPage);
