import React from "react";
import { NavLink } from "react-router-dom";
import SearchEngine from "../SearchEngine/SearchEngine";
const Navbar = () => {
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
      <NavLink className="navbar-brand" to="/">
        MasterCook
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/login">
              Login <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/register">
              Register <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/course/7">
              Course <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/messages">
              Messages <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
        <SearchEngine />
      </div>
    </nav>
  );
};

export default Navbar;
