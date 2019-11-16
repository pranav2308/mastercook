import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import Homepage from '../Homepage/Homepage';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
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
				</Switch>
			 </Router>
  		);
	}
  
}

export default App;
