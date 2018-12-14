import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import movie_icon from "../../assets/images/movie.png";
import star_icon from "../../assets/images/star.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <NavLink to="/" className="button">
          <img className="icon" src={movie_icon} />
          Popular
        </NavLink>
        <NavLink to="/favorites" className="button">
          <img className="icon" src={star_icon} />
          Favorites
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
