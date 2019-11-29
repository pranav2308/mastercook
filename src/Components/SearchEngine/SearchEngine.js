import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../SearchEngine/SearchEngine.css";

class SearchEngine extends Component {
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Find Courses"
          aria-label="Search"
        />
        <NavLink className="nav-link" to="/courseBrowser">
          Search <span className="sr-only">(current)</span>
        </NavLink>
      </form>
    );
  }
}

export default SearchEngine;
