import React from 'react';
import './ap.css';
const AccountPreference = (props) => {

		const tableStyle = {
			height : '300px',
			marginTop:  '10%',
	  		marginLeft: 'auto',
	  		marginRight: 'auto'
		}
		const bigHeadingStyle = {
			color : '#7a653f',
			fontWeight: 'bold',
			fontSize : '350%'
		}

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

		<div class="First-Name">
 		<label for=" FirstName">First Name </label>
 		<textarea class="form-control" id="FirstName" rows="1"></textarea>
 	</div>

		 <div class="Last-Name">
			<label for=" LastName">Last Name </label>
			<textarea class="form-control" id="LastName" rows="1"></textarea>
		</div>

		<div class="User-Name">
		 <label for=" UserName">Username </label>
		 <textarea class="form-control" id="Username" rows="1"></textarea>
		</div>

		  <div class="Email">
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
		  </div>

		  <div class="Password">
		    <label for="exampleInputPassword1">Change Password</label>
		    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>

				<div class="Account-type">
					<label for="AccountType"> Account Type </label>
					<select id="AccountType" class="form-control">
					<option>Student</option>
					<option>Instructor</option>
					<option>Administrator</option>
					</select>
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

export default AccountPreference;
