import { any } from "prop-types";
import React from "react";
import firebase from "../../Firebase/firebase";
import "../CourseBrowser/CourseBrowser.css";

let courseRef = firebase.firestore.collection("Courses");

class CourseBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseNames: [],
      courseDesc: [],
      searchResults: any
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(event) {
    let newCourse = [];
    let newCourseName = [];
    let newCourseDesc = [];
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
        newCourseName.push(doc.data()["Name"]);
        newCourseDesc.push(doc.data()["Description"]);
      });
      this.setState({
        courses: newCourse,
        courseNames: newCourseName,
        courseDesc: newCourseDesc
      });
    });
  }
  componentDidUpdate() {
    if (this.state["courseNames"].length > 0) {
      let searchResults = this.searchForMatches();
      // search results now contain the filtered courses from the DB
      console.log(searchResults);
    }
  }

  searchForMatches() {
    let searchText = this.props.match.params["searchString"];
    let result = [];
    let courseList = this.state["courses"];
    for (let i = 0; i < courseList.length; i++) {
      if (typeof courseList[i]["name"] !== "undefined") {
        if (courseList[i]["name"].includes(searchText)) {
          result.push(courseList[i]);
        }
      }
      if (typeof courseList[i]["description"] !== "undefined") {
        if (courseList[i]["description"].includes(searchText)) {
          result.push(courseList[i]);
        }
      }
    }

    // remove duplicates from the result;
    const retVal = [...new Set(result)];
    return retVal;
  }

  render() {
    return (
      <div className="course-browser-container">
        <p> test </p>
      </div>
    );
  }
}

export default CourseBrowser;
