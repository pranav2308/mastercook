import React from 'react';

import emptyUser from './helperObjects';
import setUser from './helperMethods';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from '../../Firebase/firebase';
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
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			user : emptyUser
		};
		this.setUser = setUser.bind(this);
	}

	componentWillMount() {
        var _this = this;
        firebase.auth.onAuthStateChanged(function (user) {
            _this.setState({user: user});
        }, function (error) {
            console.log(error);
        });

    }



	render(){
		return (
			<Router>
				<Navbar/>
				<Switch>
					
					<Route exact path = "/" render = { (props) => <Homepage {...props} setUser = {this.setUser}/>}/>
					<Route exact path = "/login" component = {Login}/>
					<Route exact path = "/register" component = {Register}/>
					<Route exact path = "/dashboard/" render = {(props) => <Dashboard {...props} user = {this.state.user}/>}/>
					<Route path = "/course/:id" render = {(props) => <Course {...props} user = {this.state.user}/>}/>
					<Route path = "/courseBrowser/" render = {(props) => <CourseBrowser {...props} user = {this.state.user}/>}/>
					<Route path = "/settings/" render = {(props) => <AccountPreference {...props} user = {this.state.user}/>}/>
					<Route path = "/messages" render = {(props) => <Messages {...props} user = {this.state.user}/>}/>
					<Route path = "/assignment/:id" render = {(props) => <Assignment {...props} user = {this.state.user}/>}/>
					<Route component = {PageNotFound}/>
				</Switch>
			 </Router>
  		);
	}
}

export default App;
