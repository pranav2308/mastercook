import React from 'react';
import './Dashboard.css';
import { setEnrolledCourseList, getEnrolledCoursesRenderElement, getAssignmentRenderElement, setAnnouncementObj, getAnnouncementRenderElement } from './helperMethods';


class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			enrolledCourseList : [],
			announcementObj : null
		}
		this.setEnrolledCourseList = setEnrolledCourseList.bind(this);
		this.setAnnouncementObj = setAnnouncementObj.bind(this);
		
	}
	
	componentDidMount(){
		
		const {enrolledCourses} = this.props.user;
		if(enrolledCourses){
			this.setEnrolledCourseList(enrolledCourses);
		}
		this.setAnnouncementObj();
	}
	render(){		

		const chickenImgUrl = "https://www.foodrepublic.com/wp-content/uploads/2014/06/cachacachicken_0.jpg";

		const EnrolledCoursesRenderElement = getEnrolledCoursesRenderElement(this.state.enrolledCourseList);

		const announcementList = getAnnouncementRenderElement(this.state.announcementObj);

		const assignmentList = getAssignmentRenderElement(this.state.enrolledCourseList);
		
		const{ firstName, accountType } = this.props.user;	
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
							  <img src= {chickenImgUrl} class="card-img-top" alt="Tofu dishes"/>
							  <div class="card-body">
							    <h5 class="card-title">Chicken recipes</h5>
							    <p class="card-text">Cut chicken and eat it!</p>
							     <p class="card-text"><span className = "font-weight-bold">Intructor:</span> Kim jong-un</p>
							    <a class="btn btn-primary">Enroll Course!</a>
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