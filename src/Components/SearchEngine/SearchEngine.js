import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../SearchEngine/SearchEngine.css";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Find Courses"
          aria-label="Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <NavLink className="nav-link" to={`/courseBrowser/${this.state.value}`}>
          Search <span className="sr-only">(current)</span>
        </NavLink>
      </form>
    );
  }
}

export default SearchEngine;
