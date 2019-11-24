import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";
import firebase from '../../Firebase/firebase';
import {Redirect} from "react-router-dom";
import '../Homepage/Homepage.css';
import {RegularDiv, RegisterDiv} from './DivHelper';

class Homepage extends Component{

	constructor(props){
		super(props);

		this.state = {
			signedIn: false, 
			userEmail: '' , 
			userPassword: '', 
			error: false, 
			message: '', 
			register: false};

		this.onLogin = this.onLogin.bind(this);
		this.onSignup = this.onSignup.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.emailOnChange = this.emailOnChange.bind(this);
		this.passwordOnChange = this.passwordOnChange.bind(this);
	}

	emailOnChange(event) {
		this.setState({userEmail: event.target.value});
		console.log(this.state.userEmail);
	}

	passwordOnChange(event) {
		this.setState({userPassword: event.target.value});
		console.log(this.state.userPassword);
	}

	onLogin = (event) => {
		
		firebase.auth.signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
		.then(() => {
			this.setState({signedIn: true, userEmail: '', userPassword: '', error: false, message: '', register: false});
			alert("You Are Signed In!");
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;

			console.log(errorCode);
			
			if (errorCode === 'auth/wrong-password'){
				alert('Wrong Password.');
			}
			if (errorCode === 'auth/invalid-email'){
				alert('Invalid Email.');
			}
			if (errorCode === 'auth/user-not-found'){
				alert('User Not Found.');
			}
			if (errorCode === 'auth/user-disabled'){
				alert('User-disabled.');
			}

		});	
	}

	//Processes user email and password through db on submit
	//Creates new user record if user credentials not found in db
	onSignup = (event) => {
		if (!this.state.register){
			this.setState({signedIn: false, error: false, message: '', register: true});
		}
		
	}

	handleRegister(event){

		firebase.auth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
			.then(() => {
				this.setState({signedIn: true, error: false, message: '', register: false});
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;

				this.setState({error: true, message: errorMessage});

				if (errorCode === 'auth/email-already-in-use'){
					alert('Email Already In Use.');
				}
				if (errorCode === 'auth/invalid-email'){
					alert('Invalid Email.');
				}
				if (errorCode === 'auth/weak-password'){
					alert('Weak Password.');
				}
			});
	}

	render(){

		if (this.state.signedIn) {
            return (<Redirect to={"/dashboard"}/>);
        }

		if (this.state.register) {
			return (
				<div class = "homepage-container">
					<RegisterDiv handleRegister = {this.handleRegister}/>}
				</div>
			);
		}

		return(
			<div class = "homepage-container">
				<RegularDiv onSignup = {this.onSignup} onLogin = {this.onLogin} emailOnChange = {this.emailOnChange} passwordOnChange = {this.passwordOnChange}/>
			</div>
			
		)
	}
}

export default Homepage;