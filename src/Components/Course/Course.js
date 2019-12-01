import React from "react";
import firebase from "../../Firebase/firebase";
import "../Course/Course.css";
import CourseContent from "../CourseContent/CourseContent";
import Discussions from "../Discussions/Discussions";
import Lessons from "../Lessons/Lessons";

let courseRef = firebase.firestore.collection("Courses");

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseLessons: {
        lessons: [],
        courseName: ""
      },
      currentCourse: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let newCourse = [];
    let newCourseLessons = [];
    let newCurrent = {};
    const courseID = this.props.match.params["id"];
    courseRef.onSnapshot(async s => {
      await s.forEach(doc => {
        let courseObj = {
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
        };
        if (typeof courseID !== "undefined") {
          if (doc.id === courseID) {
            newCurrent = courseObj;
          }
        }
        newCourse.push(courseObj);
        newCourseLessons.push({
          lessons: doc.data()["Lessons"],
          name: doc.data()["Name"],
          id: doc.id
        });
      });
      this.setState({
        courses: newCourse,
        courseLessons: newCourseLessons,
        currentCourse: newCurrent
      });
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="courseContainer">
        <div className="courseContent">
          <CourseContent currentCourse={this.state.currentCourse} />
        </div>
        <div className="lessonsContainer">
          <Lessons currentCourse={this.state.currentCourse} />
        </div>
        <div className="discussionContent">
          <Discussions />
        </div>
      </div>
    );
  }
}

export default Course;
