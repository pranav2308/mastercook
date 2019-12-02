import React from "react";
import { NavLink } from "react-router-dom";
import SearchEngine from "../SearchEngine/SearchEngine";

const Navbar = props => {
  const isSignedIn = props.isSignedIn;

  let navBarElements, logoElement;
  if (isSignedIn) {
    logoElement = (
      <NavLink className="navbar-brand" to="/dashboard">
        MasterCook
      </NavLink>
    );

    navBarElements = (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/messages">
              Messages <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/settings">
              Settings <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/logout">
              Logout <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
        <SearchEngine />
      </div>
    );
  } else {
    logoElement = (
      <NavLink className="navbar-brand" to="/">
        MasterCook
      </NavLink>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {logoElement}
      {navBarElements}
    </nav>
  );
};

export default Navbar;
