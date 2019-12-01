import React from "react";
import "../Course/Course.css";
import CourseContent from "../CourseContent/CourseContent";
import Discussions from "../Discussions/Discussions";
import Lessons from "../Lessons/Lessons";
import { any } from "prop-types";
import firebase from "../../Firebase/firebase";

let courseRef = firebase.firestore.collection("Courses");

class Course extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      courses: [],
      courseLessons: {
        lessons:[],
        courseName: ""
      }
    }
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount () {
    let newCourse = [];
    let newCourseLessons = [];
    
    courseRef.onSnapshot(async s => {
      await s.forEach(doc => {
        newCourse.push({
          id: doc.id,
          name: doc.data()["Name"],
          announcements: doc.data()["Announcements"],
          description: doc.data()["Description"],
          discussions: doc.data()["Discussions"],
          duration: doc.data()["Duration"],
          helpText: doc.data()["HelpText"],
          instructor: doc.data()["Instructor"],
          lessons: doc.data()["Lessons"],
          quizList: doc.data()["QuizList"],
          studentList: doc.data()["StudentList"],
          syllabus: doc.data()["Syllabus"]
        });
        newCourseLessons.push({
          lessons: doc.data()["Lessons"],
          name: doc.data()["Name"],
          id: doc.id,
        })
      });
      this.setState({
        courses: newCourse,
        courseLessons: newCourseLessons
      });
      console.log(this.state);
    })
  }

  render (){
    return (
      <div className="courseContainer">
        <div className="courseContent">
          <CourseContent />
        </div>
        <div className="lessonsContainer">
          <Lessons />
        </div>
        <div className="discussionContent">
          <Discussions />
        </div>
      </div>
    );
  }
}


export default Course;
