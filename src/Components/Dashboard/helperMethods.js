import React from "react";
import CourseCard from './CourseCard';
import { NavLink } from "react-router-dom";
import firebase from "../../Firebase/firebase";

async function setEnrolledCourseList(enrolledCourses) {
  const promises = enrolledCourses.map(enrolledCourseObj => {
    return new Promise((resolve, reject) => {
      firebase.firestore
        .collection("Courses")
        .doc(enrolledCourseObj.courseID.toString())
        .onSnapshot(snapshot => {
          let databaseObj = snapshot.data();
          databaseObj.progress = enrolledCourseObj.progress;
          resolve(databaseObj);
        });
    });
  });
  const enrolledCourseList = await Promise.all(promises);
  this.setState({ enrolledCourseList: enrolledCourseList });
}

function routeToCoursePage(courseID){
	this.props.history.replace('/course/'.concat(courseID.toString()));
}

function getEnrolledCoursesRenderElement(enrolledCourseList, routeToCoursePage) {
  if (enrolledCourseList.length !== 0) {
    const courseList = enrolledCourseList.map((enrolledCourseObj, index) => {
      const {
      	ID,
        ImageUrl,
        Description,
        InstructorName,
        Name,
        progress
      } = enrolledCourseObj;
      return (
        <CourseCard key={index} ImageUrl = {ImageUrl} ID = {ID} Name = {Name} InstructorName = {InstructorName} Description = {Description} progress = {progress} routeToCoursePage = {routeToCoursePage} typeOfCard = {"Enrollment"}/>
      );
    });
    return courseList;
  }
  return (
    <div className="col">
      <p className="font-weight-light font-italic text-left">
        {" "}
        You currently have no Enrolled Courses!
      </p>
    </div>
  );
}

function getAssignmentRenderElement(enrolledCourseList, match) {
  
  const url = match.url;
  const assignmentRenderElement = enrolledCourseList.map((enrolledCourseObj,index) => {
    const { Assignments } = enrolledCourseObj;
    if (Assignments) {
      const assignmentList = Assignments.map((assignmentID,index) => (
        <NavLink key={index} className="nav-link" to= {'/assignment/'.concat(assignmentID.toString())}> {`Assignment ${assignmentID}`}</NavLink>
      ));
      return (
        <div key={index}>
          <h4 key={index}> {enrolledCourseObj.Name} </h4>
          {assignmentList}
        </div>
      );
    }
  });

  if (assignmentRenderElement.length !== 0) {
    return (
      <div className="sidebar-list">
        <h3> Assignment </h3>
        {assignmentRenderElement}
      </div>
    );
  }
}

async function setAnnouncementObj() {
  const announcementObj = await new Promise((resolve, reject) => {
    firebase.firestore
      .collection("Announcements")
      .doc("AnnouncementList")
      .onSnapshot(snapshot => {
        resolve(snapshot.data());
      });
  });
  this.setState({ announcementObj: announcementObj });
  // console.log(announcementObj);
}

function getAnnouncementRenderElement(announcementObj) {
  if (announcementObj) {
    let announcementList = [];
    for (const announcementID in announcementObj) {
      announcementList.push(<li> {announcementObj[announcementID]}</li>);
    }
    if (announcementList) {
      return (
        <div className="sidebar-list">
          <h3> Announcement </h3>
          {announcementList}
        </div>
      );
    }
  }
}

function getRecommendedCourseID(enrolledCourses){

  // console.log(enrolledCourses);
  const totalRecommendedCourses = 2;
  let totalEnrolledcourses;
  if(enrolledCourses){
     totalEnrolledcourses = enrolledCourses.length;  
  }
  else{
    totalEnrolledcourses = 0;
  }
  
  
  const totalCourses = 4;
  let recommendedCourses = [];

  for(let databaseIndex = 0; databaseIndex <= totalCourses - 1; databaseIndex++){
    
    if(recommendedCourses.length < totalRecommendedCourses){

      const recommendedCourseID = databaseIndex + 1;
      let courseEnrolled = false;
      for(let enrolledCourseIndex = 0; enrolledCourseIndex < totalEnrolledcourses; enrolledCourseIndex++){
        if(enrolledCourses[enrolledCourseIndex].courseID === recommendedCourseID){
          courseEnrolled = true;
          break;
        }
      }
      if(!courseEnrolled){
        recommendedCourses.push(recommendedCourseID);
      }

    }
    else{
      break;
    }
  }

  return recommendedCourses;
}


async function setRecommendedCourseList(recommendedCourseIDs){

  const promises = recommendedCourseIDs.map(recommendedCourseID => {
    return new Promise((resolve, reject) => {
      firebase.firestore
        .collection("Courses")
        .doc(recommendedCourseID.toString())
        .onSnapshot(snapshot => {
          let databaseObj = snapshot.data();
          resolve(databaseObj);
        });
    });
  });
  const recommendedCourseList = await Promise.all(promises);
  //console.log('recommendedCourseList: ', recommendedCourseList);
  this.setState({ recommendedCourseList: recommendedCourseList});
}

function getRecommendedRenderElement(recommendedCourseList, onClickEnrollCourse){

  const courseList = recommendedCourseList.map((recommendedCourseObj, index) => {
      const {
        ID,
        ImageUrl,
        Description,
        InstructorName,
        Name
      } = recommendedCourseObj;
      return (
        <CourseCard key={index} ImageUrl = {ImageUrl} ID = {ID} Name = {Name} InstructorName = {InstructorName} Description = {Description} onClickEnrollCourse = {onClickEnrollCourse} typeOfCard = {"Recommended"}/>
      );
    });
    return courseList;
}

function onClickEnrollCourse(courseID){

    const _this = this;
    let {enrolledCourses} = this.props.user;
    const userID = firebase.auth.currentUser.uid;
    
    enrolledCourses.push({courseID : courseID, progress : 0});
    
    new Promise((resolve, reject) => {
      resolve(firebase.database.ref('users/' + userID).update({EnrolledCourses : enrolledCourses}));  
    })
    .then(function(){
      
      this.setEnrolledCourseList(enrolledCourses);
      const recommendedCourseID = getRecommendedCourseID(enrolledCourses);
      this.setRecommendedCourseList(recommendedCourseID)
      this.props.setUser(Object.assign(this.props.user, {enrolledCourses : enrolledCourses}));
    }.bind(_this))
    .catch(error => console.log(error));
    
  }


export {
  setEnrolledCourseList,
  getEnrolledCoursesRenderElement,
  getAssignmentRenderElement,
  setAnnouncementObj,
  getAnnouncementRenderElement,
  routeToCoursePage,
  getRecommendedCourseID,
  setRecommendedCourseList,
  getRecommendedRenderElement,
  onClickEnrollCourse
};
