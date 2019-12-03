import React, { Component } from 'react';
import { Button, Form , Dropdown, DropdownButton} from "react-bootstrap";
import firebase from '../../Firebase/firebase';
import './ap.css';
import {Redirect} from "react-router-dom";

let defaultPic = "https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"
let progressOptions =  ["Only me", "Public"]

class AccountPreference extends Component {

	constructor(props){
		super(props);

		this.state = {
			signedIn: true,
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			profile: '',
			first_m: '',
			last_m: '',
			email_m: '',
			currentProgressOption: '',
			font_size: ''
		}

		this.firstNameOnChange = this.firstNameOnChange.bind(this);
		this.lastNameOnChange = this.lastNameOnChange.bind(this);
		this.emailOnChange = this.emailOnChange.bind(this);
		this.submitOnClick= this.submitOnClick.bind(this);
		this.progressOnChange = this.progressOnChange.bind(this);
		this.signOut = this.signOut.bind(this);
	}

	componentDidMount(){
		this.setState({firstName: this.props.user.firstName, lastName: this.props.user.lastName,
						username: this.props.user.username, email: this.props.user.email,
						profile: this.props.user.profilePic, font_size: this.props.user.fontSize});

		if (this.state.profile === ""){
			this.setState({profile: defaultPic});
		}

		if (this.props.user.shareProgress === false){
			this.setState({currentProgressOption: progressOptions[0]});
		} else {
			this.setState({currentProgressOption: progressOptions[1]});
		}
	}

	firstNameOnChange(event){
		if (event.target.value){
			this.setState({first_m: event.target.value});
		}
	}
	lastNameOnChange(event){
		if (event.target.value){
			this.setState({last_m: event.target.value});
		}
	}
	emailOnChange(event){
		if (event.target.value){
			this.setState({email_m: event.target.value});
		}
	}

	submitOnClick(event){
		let userID = firebase.auth.currentUser.uid;

		let fn = (this.state.first_m) ? this.state.first_m : this.state.firstName;
		let ln = (this.state.last_m) ? this.state.last_m : this.state.lastName;
		let em = (this.state.email_m) ? this.state.email_m : this.state.email;

		firebase.database.ref("users/" + userID).update({
			FirstName: fn,
			LastName: ln,
			Email: em
		});
	}

	progressOnChange(event){
		let userID = firebase.auth.currentUser.uid;
		if (this.state.currentProgressOption === progressOptions[0]){
			this.setState({currentProgressOption: progressOptions[1]});
			firebase.database.ref("users/" + userID).update({
				ShareProgress: true,
			});
		} else {
			this.setState({currentProgressOption: progressOptions[0]});
			firebase.database.ref("users/" + userID).update({
				ShareProgress: false,
			});
		}
	}

	signOut(event){
		firebase.auth.signOut().then(function() {
			console.log('Signed Out');
		  }, function(error) {
			console.error('Sign Out Error', error);
		  });

		this.setState({signedIn: false});
	}

	render() {

		console.log(this.props.user);
		if (this.state.signedIn === false){
			return (<Redirect to={"/"}/>);
		}
		let pg_other_option = (this.state.currentProgressOption === progressOptions[0])? progressOptions[1] : progressOptions[0];
		
		return (
			<div className = "container">

			<h1>Account Settings</h1>

			<div class="card card-addon">
			<img src={this.state.profile}
		 class="card-img-top"/>
			</div>

			<div className="info-container">
				<Form>
					<Form.Group>
					<Form.Text><h5>First Name</h5></Form.Text>
					<Form.Control
						id="first-name"
						type="text"
						placeholder={this.state.firstName}
						onChange={this.firstNameOnChange}
						
					/>
					</Form.Group>

					<Form.Group>
					<Form.Text><h5>Last Name</h5></Form.Text>
					<Form.Control
						id="last-name"
						type="text"
						placeholder={this.state.lastName}
						onChange={this.lastNameOnChange}
					/>
					</Form.Group>

					<Form.Group>
					<Form.Text><h5>Email</h5></Form.Text>
					<Form.Text><h6>{this.state.email}</h6></Form.Text>
					</Form.Group>
					<Button variant="btn btn-outline-primary" type="button" onClick={this.submitOnClick}>
         				 Submit
        			</Button>
				</Form>
			</div>

					<h1 className = "heading-addon">Preferences</h1>

					<div class="FontSize">
				<label className="FontSizeLabel">Font Size</label>
				<select id="FontSize">
						<option>12</option>
						<option>14</option>
						<option>16</option>
						<option>18</option>
						<option>20</option>
						<option>22</option>
						<option>24</option>
				</select>
				</div>

					<div class="ChooseLanguage">
						<label className = "LanguageLabel"> Language</label>
						<select id="Language" class="ChooseLanguage">
							<option>English</option>
							<option>Spanish</option>
							<option>French</option>
						</select>
						</div>

					<div>

					<div class="Progress">
						<label className="ProgressLabel">Progress </label>
						<select id="shareProgress" onChange={this.progressOnChange}>
							<option>Only me</option>
							<option>Public</option>
						</select>
					</div>

					</div>

				<button type="LogOut" class="btn btn-outline-primary Button2" onClick={this.signOut}> Log Out</button>

			</div>
		);
	}
}

export default AccountPreference;
