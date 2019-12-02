import React from 'react';
import {Dropdown} from 'react-bootstrap';
import firebase from '../../Firebase/firebase';
import './CourseBrowser.css';
import CourseItem from './CourseItem';
import CourseList from './CourseList';
import SearchEngine from '../SearchEngine/SearchEngine';
import { any } from 'prop-types';

let courseRef = firebase.firestore.collection("Courses");

class CourseBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseNames: [],
      courseDesc: [],
      searchResults: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let newCourse = [];
    let newCourseName = [];
	let newCourseDesc = [];
	let newSearchResults = [];
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

	  if (this.state["courseNames"].length > 0) {
	  newSearchResults = this.searchForMatches();
	  }
	  
	  this.setState({searchResults: newSearchResults});
	  //console.log(this.state.searchResults);
    });
  }

  searchForMatches() {
    let searchText = this.props.match.params["searchString"];
    //console.log(this.state["courseNames"][0]);
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
			<div className="options-container">
				<div className="sort-by-container">
					<Dropdown>
						<Dropdown.Toggle variant="light" id="dropdown-basic">
							Sort By
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Most relevant</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Most recent</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Name (A->Z)</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Name (Z->A)</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="categories-container">
					<Dropdown>
						<Dropdown.Toggle variant="light" id="dropdown-basic">
							Categories
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">All</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Indian</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Thai</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
			<div className="result-container"> <CourseList searchResults={this.state.searchResults} user={this.props.user}/></div>
		</div>
    );
  }
}

export default CourseBrowser;