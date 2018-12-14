import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MovieList from "../../components/MovieList";
import "./FavoritesPage.scss";

class FavoritesPage extends Component {
  render() {
    let { like } = this.props;
    return (
      <div className="favorites_container">
        <MovieList movies={like} />
      </div>
    );
  }
}

function mapStateToProps({ like }) {
  return { like };
}

export default connect(mapStateToProps)(FavoritesPage);
