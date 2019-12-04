import React, {Component} from 'react';
import firebase from '../../Firebase/firebase';

let courseRef = firebase.firestore.collection('Courses');

class CourseItem extends Component {
    constructor(props){
        super(props);
    }

    onClickEnrollCourse = (courseID) => {

		let {enrolledCourses} = this.props.user;
		const userID = firebase.auth.currentUser.uid;
		
		enrolledCourses.push({courseID : parseInt(courseID), progress : 0});
		
		new Promise((resolve, reject) => {
			resolve(firebase.database.ref('users/' + userID).update({EnrolledCourses : enrolledCourses}));	
		})
		.then(() => {
			this.props.setUser(Object.assign(this.props.user, {enrolledCourses : enrolledCourses}));
			this.props.history.replace('/dashboard/');
		})
		.catch(error => console.log(error));
		
	}

	routeToCoursePage = (courseID) => {
	this.props.history.replace('/course/'.concat(courseID.toString()));
	}

    render() {
        
        const {enrolledCourses} = this.props.user;
        const {name, description, duration, rating, courseID} = this.props;
        let enrolledInSearchedCourse = false;
        let buttonRenderElement;
        for(const enrolledCourse of enrolledCourses){
        	if(enrolledCourse.courseID === parseInt(courseID)){
        		enrolledInSearchedCourse = true;
        	}
        }
        if(enrolledInSearchedCourse){
        	buttonRenderElement = <button class="btn btn-primary" type="submit" onClick = {() => this.routeToCoursePage(courseID)}>Continue Course</button>
        }
        else{
        	buttonRenderElement = <button class="btn btn-primary" type="submit" onClick = {() => this.onClickEnrollCourse(courseID)}>Enroll Now</button>
        }


        return(
            <section class="resultCard">
				<div class="card">
					<div class="row ">
						<div class="col-sm-3 col-md-3">
							<img src={this.props.imgUrl} class="resultCardImage"/>
						</div>
						<div class="col-sm-3 col-md-8 px-3">
							<div class="card-block px-3">
                            <h1 class="card-text">{this.props.name}</h1>
                            <h6 class="card-text"><t>{this.props.description}</t></h6>
							<p class="card-text"> Duration: {this.props.duration}</p>
							<p class="card-text"> {`Rating: ${this.props.rating}/5`}</p>
							{buttonRenderElement}
							</div>
						</div>

						</div>
					</div>
            </section>
        );
    }
}

export default CourseItem;