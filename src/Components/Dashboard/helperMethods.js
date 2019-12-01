import React from "react";
import CourseCard from './CourseCard';
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
	this.props.history.push('course/'.concat(courseID.toString()));
}

function getEnrolledCoursesRenderElement(enrolledCourseList, routeToCoursePage) {
  if (enrolledCourseList.length !== 0) {
    const courseList = enrolledCourseList.map(enrolledCourseObj => {
      const {
      	ID,
        ImageUrl,
        Description,
        InstructorName,
        Name,
        progress
      } = enrolledCourseObj;
      return (
        <CourseCard ImageUrl = {ImageUrl} ID = {ID} Name = {Name} InstructorName = {InstructorName} Description = {Description} progress = {progress} routeToCoursePage = {routeToCoursePage}/>
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

function getAssignmentRenderElement(enrolledCourseList) {
  const assignmentRenderElement = enrolledCourseList.map(enrolledCourseObj => {
    const { Assignments } = enrolledCourseObj;
    if (Assignments) {
      const assignmentList = Assignments.map(assignmentID => (
        <li> {`Assignment ${assignmentID}`}</li>
      ));
      return (
        <div>
          <h4> {enrolledCourseObj.Name} </h4>
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

export {
  setEnrolledCourseList,
  getEnrolledCoursesRenderElement,
  getAssignmentRenderElement,
  setAnnouncementObj,
  getAnnouncementRenderElement,
  routeToCoursePage
};
