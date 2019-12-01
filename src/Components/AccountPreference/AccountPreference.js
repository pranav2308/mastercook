import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import firebase from '../../Firebase/firebase';
import './ap.css';

class AccountPreference extends Component {

	constructor(props){
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			email: '',
		}
	}

	componentDidMount(){
		console.log(firebase.auth.currentUser);
		let userID = firebase.auth.currentUser.uid;
		firebase.database.ref("users/" + userID).once('value').then((s) => {
			console.log(s);
			//this.setState({});
		})
	}

	render() {
		return (
			<div className = "container">

			<h1>Account Settings</h1>


			<div class="card card-addon">
			<img src="http://images6.fanpop.com/image/photos/40500000/-Hannah-Baker-13-reasons-why-netflix-series-40517480-250-250.png" class="card-img-top" alt="..."/>
			<div class="card-body">
				<h5 class="card-title">Profile Picture</h5>
				<p class="card-text">Change Profile Picture</p>
				<a href="#" class="btn btn-primary">Upload Pic</a>
			</div>
			</div>

			<div className="info-container">
				<Form>
					<Form.Group>
					<Form.Text><h5>First Name</h5></Form.Text>
					<Form.Control
						id="first-name"
						type="text"
						placeholder={this.state.firstName}
						
					/>
					</Form.Group>

					<Form.Group>
					<Form.Text><h5>Last Name</h5></Form.Text>
					<Form.Control
						id="last-name"
						type="text"
						placeholder={this.state.lastName}
						
					/>
					</Form.Group>

					<Form.Group>
					<Form.Text><h5>Username</h5></Form.Text>
					<Form.Control
						id="username"
						type="text"
						placeholder={this.state.username}
						
					/>
					</Form.Group>

					<Form.Group>
					<Form.Text><h5>Email</h5></Form.Text>
					<Form.Control
						id=""
						type="email"
						placeholder={this.state.email}
					
					/>
					</Form.Group>
				</Form>
			</div>

					<h1 className = "heading-addon">Preferences</h1>

					<div class="FontSize">
				<label className="FontSizeLabel">Font Size</label>
				<select id="FontSize">
				<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
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

						<div class="shareProgress">
							<label className="ShareProgressLabel"> Share Progress:</label>
							<select id="ShareProgress" class="ShareProgress">
							<option>Only me</option>
							<option>Public</option>
							<option>My friends</option>
							</select>
							</div>

			<button type="CancelSub" class="btn btn-primary Button1" > Cancel Subscription</button>

				<button type="LogOut" class="btn btn-outline-primary Button2"> Log Out</button>

			</div>
		);
	}
}

export default AccountPreference;
