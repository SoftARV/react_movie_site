import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <NavLink to="/" className="button">
          Popular
        </NavLink>
        <NavLink to="/favorites" className="button">
          Favorites
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
