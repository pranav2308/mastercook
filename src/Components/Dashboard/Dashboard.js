import React from 'react';
import './Dashboard.css';
import firebase from "../../Firebase/firebase";
import DashboardInstructor from './DashboardInstructor';
import DashboardAdmin from './DashboardAdmin';

import { setEnrolledCourseList, 
	getEnrolledCoursesRenderElement, 
	getAssignmentRenderElement,
	setAnnouncementObj, 
	getAnnouncementRenderElement, 
	routeToCoursePage, 
	getRecommendedCourseID,
	setRecommendedCourseList,
	getRecommendedRenderElement,
	onClickEnrollCourse} from './helperMethods';


class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			enrolledCourseList : [],
			recommendedCourseList: [],
			announcementObj : null
		}
		this.setEnrolledCourseList = setEnrolledCourseList.bind(this);
		this.setAnnouncementObj = setAnnouncementObj.bind(this);
		this.routeToCoursePage = routeToCoursePage.bind(this);
		this.getEnrolledCoursesRenderElement = getEnrolledCoursesRenderElement.bind(this);
		this.getRecommendedRenderElement = getRecommendedRenderElement.bind(this);
		this.setRecommendedCourseList = setRecommendedCourseList.bind(this);
		this.onClickEnrollCourse = onClickEnrollCourse.bind(this);
	}
	
	componentDidMount(){
		
		const {enrolledCourses} = this.props.user;
		if(enrolledCourses){
			this.setEnrolledCourseList(enrolledCourses);
		}
		const recommendedCourseID = getRecommendedCourseID(enrolledCourses);
		this.setRecommendedCourseList(recommendedCourseID)
		this.setAnnouncementObj();
	}
	render(){		

		const{ firstName, lastName, accountType } = this.props.user;	

		if(accountType === 'Instructor'){
			return <DashboardInstructor firstName = {firstName} accountType = {accountType} {...this.props}/>
		}

		if(accountType === 'Admin'){
			return <DashboardAdmin />
		}
		const pizzaImgUrl = "http://www.spoonforkbacon.com/wordpress/wp-content/uploads/2017/02/fall_pizza_recipe-800x1066.jpg";

		const EnrolledCoursesRenderElement = getEnrolledCoursesRenderElement(this.state.enrolledCourseList, this.routeToCoursePage);

		const announcementList = getAnnouncementRenderElement(this.state.announcementObj);

		const assignmentList = getAssignmentRenderElement(this.state.enrolledCourseList, this.props.match);
		
		
		// console.log('recommendedCourseID: ', recommendedCourseID)
		const recommendedCourseRenderElement = getRecommendedRenderElement(this.state.recommendedCourseList, this.onClickEnrollCourse);
		// console.log(recommendedCourseID);
		
		return(
			<div className = "dashboard-container">
				<div class = "sidenav-container">
					{announcementList}
					{assignmentList}
				</div>
				<div className = "main-container container">
					<div className = "row">
						<div className = "col">
							<h2 className = 'heading text-left'> {`Welcome ${firstName} ${lastName}`}</h2>
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

						{recommendedCourseRenderElement}

					</div>
					
					
				</div>
			</div>
		);	
	}
	
}

export default Dashboard;