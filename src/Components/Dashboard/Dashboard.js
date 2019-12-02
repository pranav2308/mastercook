import React from 'react';
import './Dashboard.css';
import firebase from "../../Firebase/firebase";
import DashboardInstructor from './DashboardInstructor';

import { setEnrolledCourseList, getEnrolledCoursesRenderElement, getAssignmentRenderElement, setAnnouncementObj, getAnnouncementRenderElement, routeToCoursePage } from './helperMethods';


class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			enrolledCourseList : [],
			announcementObj : null
		}
		this.setEnrolledCourseList = setEnrolledCourseList.bind(this);
		this.setAnnouncementObj = setAnnouncementObj.bind(this);
		this.routeToCoursePage = routeToCoursePage.bind(this);
		this.getEnrolledCoursesRenderElement = getEnrolledCoursesRenderElement.bind(this);
		
	}
	
	componentDidMount(){
		
		const {enrolledCourses} = this.props.user;
		if(enrolledCourses){
			this.setEnrolledCourseList(enrolledCourses);
		}
		this.setAnnouncementObj();
	}

	onClickEnrollCourse = (courseID) => {

		let {enrolledCourses} = this.props.user;
		const userID = firebase.auth.currentUser.uid;
		
		enrolledCourses.push({courseID : courseID, progress : 0});
		
		new Promise((resolve, reject) => {
			resolve(firebase.database.ref('users/' + userID).update({EnrolledCourses : enrolledCourses}));	
		})
		.then(() => {
			
			this.setEnrolledCourseList(enrolledCourses);
			this.props.setUser(Object.assign(this.props.user, {enrolledCourses : enrolledCourses}));
		})
		.catch(error => console.log(error));
		
	}
	render(){		

		const{ firstName, accountType } = this.props.user;	

		if(accountType === 'Instructor'){
			return <DashboardInstructor firstName = {firstName} accountType = {accountType} {...this.props}/>
		}

		const pizzaImgUrl = "http://www.spoonforkbacon.com/wordpress/wp-content/uploads/2017/02/fall_pizza_recipe-800x1066.jpg";

		const EnrolledCoursesRenderElement = getEnrolledCoursesRenderElement(this.state.enrolledCourseList, this.routeToCoursePage);

		const announcementList = getAnnouncementRenderElement(this.state.announcementObj);

		const assignmentList = getAssignmentRenderElement(this.state.enrolledCourseList, this.props.match);
		
		
		return(
			<div className = "dashboard-container">
				<div class = "sidenav-container">
					{announcementList}
					{assignmentList}
				</div>
				<div className = "main-container container">
					<div className = "row">
						<div className = "col">
							<h2 className = 'heading text-left'> {`Welcome ${firstName}`}</h2>
						</div>
					</div>
					<div className = "row">
						<div className = "col">
							<p className = 'font-weight-light font-italic text-left'>{`*You are currently logged-in as a ${accountType}.`}</p>
						</div>
					</div>
					<div className = "row">
						<div className = "col">
							<h2 className = 'heading text-left'> Enrolled courses</h2>
						</div>
					</div>
					<div className = "row">
						{EnrolledCoursesRenderElement}
					</div>
					
					<div className = "row">
						<div className = "col">
							<h2 className = 'heading text-left'> Recommended courses </h2>
						</div>
					</div>

					<div className = "row">

						<div className = "col">
							<div className = "card card-addon">
							  <img src= {pizzaImgUrl} class="card-img-top" alt="pizza"/>
							  <div class="card-body">
							    <h5 class="card-title">MC004: Pizza 101</h5>
							    <p class="card-text">Cook homemade delicious pizza. It's easy, fast and healthy!</p>
							     <p class="card-text"><span className = "font-weight-bold">Intructor:</span> Gordon Ramsey</p>
							    <a class="btn btn-primary" onClick = {() => this.onClickEnrollCourse(4)}>Enroll Course!</a>
							  </div>
							</div>
						</div>

					</div>
					
					
				</div>
			</div>
		);	
	}
	
}

export default Dashboard;