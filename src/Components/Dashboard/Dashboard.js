import React from 'react';
import './Dashboard.css';


const Dashboard = (props) => {

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
		<li> Assignment 1</li>
		<li> Assignment 2</li>
	</div>;	
	
	return(
		<div className = "dashboard-container">
			<div class = "sidenav-container">
				{announcementList}
				{assignmentList}
			</div>
			
			<h2 className = 'heading'> Enrolled courses</h2>
			<div className = "card dashboard-addon">
			  <img src= {tofuImgUrl} class="card-img-top" alt="Tofu dishes"/>
			  <div class="card-body">
			    <h5 class="card-title">Tofu recipes</h5>
			    <p class="card-text">Learn delicious tofu recipes at low cost. It's fast, healthy, and inexpensive.</p>
			    <a class="btn btn-primary">Continue course</a>
			  </div>
			  <div class="progress">
			  	<div className="progress-bar bg-success progress-bar-addon" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
			  </div>
			</div>

			<h2 className = 'heading'> Recommended courses</h2>
			<div className = "card dashboard-addon">
			  <img src= {chickenImgUrl} class="card-img-top" alt="Tofu dishes"/>
			  <div class="card-body">
			    <h5 class="card-title">Chicken recipes</h5>
			    <p class="card-text">Cut chicken and eat it!</p>
			    <a class="btn btn-primary">Learn more!</a>
			  </div>
			</div>
		</div>
	);
}

export default Dashboard;