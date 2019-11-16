import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import Homepage from '../Homepage/Homepage';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Course from '../Course/Course';

import './App.css';

class App extends React.Component{
	
	render(){
		return (
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path = "/" component = {Homepage}/>
					<Route exact path = "/login" component = {Login}/>
					<Route exact path = "/register" component = {Register}/>
					<Route exact path = "/dashboard" component = {Dashboard}/>
					<Route path = "/course/:id" component = {Course}/>
				</Switch>
			 </Router>
  		);
	}
  
}

export default App;
