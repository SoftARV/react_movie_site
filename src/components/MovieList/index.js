import React, { Component } from "react";
import MovieItem from "../MovieItem";

import "./MovieList.scss";

class MovieList extends Component {
  _renderMovieItems() {
    let { movies } = this.props;
    return movies.map((movie, i) => {
      return <MovieItem movie={movie} />;
    });
  }

  render() {
    console.log(this.props);
    return <div className="list_container">{this._renderMovieItems()}</div>;
  }
}

export default MovieList;
