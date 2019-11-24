import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return(
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <NavLink class="navbar-brand" to = "/">MasterCook</NavLink>

		  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
		    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
		      <li class="nav-item active">
		        <NavLink className="nav-link" to = "/">Home <span class="sr-only">(current)</span></NavLink>
		      </li>
		      <li class="nav-item active">
		        <NavLink className="nav-link" to = "/login">Login <span class="sr-only">(current)</span></NavLink>
		      </li>
		      <li class="nav-item active">
		        <NavLink className="nav-link" to = "/register">Register <span class="sr-only">(current)</span></NavLink>
		      </li>
			  <li class="nav-item active">
		        <NavLink className="nav-link" to = "/course/7">Course <span class="sr-only">(current)</span></NavLink>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
		      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</nav>
	);
}

export default Navbar;