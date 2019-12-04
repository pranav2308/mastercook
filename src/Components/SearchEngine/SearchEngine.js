import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "../SearchEngine/SearchEngine.css";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = { userSearchString: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ userSearchString: event.target.value });
  }

  render() {
    // console.log(this.props);
    // console.log('In search engine')
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Find Courses"
          aria-label="Search"
          value={this.state.userSearchString}
          onChange={this.handleChange}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick = {() => {this.props.setSearchResult(this.state.userSearchString, this.props.history.push)}}>Search</button>
      </form>
    );
  }
}

export default SearchEngine;
