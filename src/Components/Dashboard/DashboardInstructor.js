import React from 'react';
import './DashboardInstructor.css';
import { NavLink } from "react-router-dom";


const DashboardInstructor = (props) => {

	const tofuImgUrl = `http://media.beam.usnews.com/a9/14/c75d491f4979a756e6108846c2e5/161104-tofucubes-stock.jpg`;
	const chickenImgUrl = `https://www.foodrepublic.com/wp-content/uploads/2014/06/cachacachicken_0.jpg`;

	const announcementList = 
	<div className = "sidebar-list">
		<h3> Announcement </h3>
		<li> website is going down tomorrow!</li>
		<li> Admin is leaving this job. Apply now!</li>
	</div>;

	const assignmentList = 
	<div className = "sidebar-list">
		<h3> Assignment </h3>
		<li><NavLink to = '/assignment/1'> Assignment 1</NavLink></li>
		<li><NavLink to = '/assignment/2'> Assignment 2</NavLink></li>
	</div>;	
	
	return(
		<div className = "dashboard-container">
			<div class = "sidenav-container">
				{announcementList}
				{assignmentList} 
			</div>
			<div className = "main-container container">
				<div className = "row">
					<div className = "col">
						<h2 className = 'heading text-left'> {`Welcome ${props.firstName}!`}</h2>
					</div>
				</div>
				<div className = "row">
					<div className = "col">
						<p className = 'font-weight-light font-italic text-left'> {`*You are currently logged-in as a ${props.accountType}`}.</p>
					</div>
				</div>
				<div className = "row">
					<div className = "col">
						<h2 className = 'heading text-left'> Current courses</h2>
					</div>
				</div>
				<div className = "row">
					
					<div className = "col">
						<div className = "card card-addon">
						  <img src= {tofuImgUrl} class="card-img-top" alt="Tofu dishes"/>
						  <div class="card-body">
						    <h5 class="card-title">Tofu recipes</h5>
						    <p class="card-text">Learn delicious tofu recipes at low cost. It's fast, healthy, and inexpensive.</p>
						    <p class="card-text"><span className = "font-weight-bold">Intructor:</span> Vladimir Putin</p>
						    <a class="btn btn-primary" onClick = {() => {props.history.replace('/course/1')}}>View/Update course</a>
						  </div>
						</div>
					</div>
				</div>
				<button type="button" class="btn btn-primary btn-lg">Analyze Performance</button>
				{/* <div className = "row">
					<div className = "col">
						<h2 className = 'heading text-left'> Recommended courses </h2>
					</div>
				</div> */}
				{/* <div className = "row">
					<div className = "col">
						<div className = "card card-addon">
						  <img src= {chickenImgUrl} class="card-img-top" alt="Tofu dishes"/>
						  <div class="card-body">
						    <h5 class="card-title">Chicken recipes</h5>
						    <p class="card-text">Cut chicken and eat it!</p>
						     <p class="card-text"><span className = "font-weight-bold">Intructor:</span> Kim jong-un</p>
						    <a class="btn btn-primary">Enroll Course!</a>
						  </div>
						</div>
					</div> */}
				{/*</div> */}
				
				
			</div>
		</div>
	);
}
export default DashboardInstructor;