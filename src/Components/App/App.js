import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';

import Navbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Course from '../Course/Course';
import CourseBrowser from '../CourseBrowser/CourseBrowser';
import AccountPreference from '../AccountPreference/AccountPreference';
import Messages from '../Messages/Messages';
import Assignment from '../Assignment/Assignment';

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
					<Route exact path = "/dashboard/" component = {Dashboard}/>
					<Route path = "/course/:id" component = {Course}/>
					<Route path = "/courseBrowser/" component = {CourseBrowser}/>
					<Route path = "/settings/" component = {AccountPreference}/>
					<Route path = "/messages" component = {Messages}/>
					<Route path = "/assignment/:id" component = {Assignment}/>

				</Switch>
			 </Router>
  		);
	}
  
}

export default App;
