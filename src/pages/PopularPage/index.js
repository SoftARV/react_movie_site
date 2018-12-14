import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchPopularMovies } from "../../shared/actions/movie_actions";
import MovieList from "../../components/MovieList";
import "./PopularPage.scss";

class PopularPage extends Component {
  constructor(props) {
    super(props);
    props.fetchPopularMovies(1);
  }

  render() {
    let { movie } = this.props;
    return (
      <div className="popular_container">
        <MovieList movies={movie} />
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPopularMovies }
  )(PopularPage)
);
