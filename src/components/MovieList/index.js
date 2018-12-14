import React, { Component } from "react";
import { Link } from "react-router-dom";

import MovieItem from "../MovieItem";

import "./MovieList.scss";

class MovieList extends Component {
  _renderMovieItems() {
    let { movies } = this.props;
    return movies.map(movie => {
      return (
        <Link
          key={movie.id}
          to={{ pathname: `/movie/${movie.id}`, state: { movie } }}
        >
          <MovieItem movie={movie} />
        </Link>
      );
    });
  }

  render() {
    return <div className="list_container">{this._renderMovieItems()}</div>;
  }
}

export default MovieList;
