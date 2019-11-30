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
					<Route exact path = "/dashboard/" component = {Dashboard}/>
					<Route path = "/course/:id" component = {Course}/>
					<Route path = "/courseBrowser/" component = {CourseBrowser}/>
					<Route path = "/settings/" component = {AccountPreference}/>
					<Route path = "/messages" component = {Messages}/>
					<Route path = "/assignment/:id" component = {Assignment}/>
					<Route component = {PageNotFound}/>
				</Switch>
			 </Router>
  		);
	}
}

export default App;
