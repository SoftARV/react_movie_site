import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BottomScrollListener from "react-bottom-scroll-listener";

import { fetchPopularMovies } from "../../shared/actions/movie_actions";
import MovieList from "../../components/MovieList";
import "./PopularPage.scss";

class PopularPage extends Component {
  currentPage = 1;

  constructor(props) {
    super(props);
    props.fetchPopularMovies(this.currentPage);
  }

  _updateList = () => {
    this.currentPage = this.currentPage + 1;
    this.props.fetchPopularMovies(this.currentPage);
  };

  render() {
    let { movie } = this.props;
    return (
      <BottomScrollListener onBottom={this._updateList} offset={500}>
        <div className="popular_container">
          <MovieList movies={movie} />
        </div>
      </BottomScrollListener>
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
