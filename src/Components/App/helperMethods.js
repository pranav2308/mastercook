import React from "react";
import firebase from '../../Firebase/firebase';


function setUser(user){
	this.setState({ user: user, isSignedIn : true});
	// console.log("User added: ", user);
}

function flushUser(emptyUser){
	this.setState({ user:emptyUser, isSignedIn : false});
}

function setSearchResult(userSearchString, replaceToCourseBrowser){

	// console.log('setSearchResult is getting called!');
	const _this = this;
	// let courseRef = firebase.firestore.collection("Courses");

	let newCourse = [];
    let newCourseName = [];
 	let newCourseDesc = [];
  	let newSearchResults = [];
    firebase.firestore.collection("Courses").onSnapshot(function(s){
    	// console.log('inside')
    	s.forEach(doc => {
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
	          syllabus: doc.data()["Syllabus"],
	          imgUrl : doc.data()["ImageUrl"],
            rating : doc.data()["Rating"]
	        });
        	newCourseName.push(doc.data()["Name"]);
        	newCourseDesc.push(doc.data()["Description"]);
    	});
    	newSearchResults = this.searchForMatches(userSearchString, newCourse);
    	this.setState({searchResults: newSearchResults});
    	// console.log(newSearchResults);
    	replaceToCourseBrowser('/courseBrowser/' + userSearchString);
    	// console.log('Page replaced!')
    }.bind(_this));
    // return (<Redirect to = '/courseBrowser/'>);
}


function searchForMatches(userSearchString, newCourse) {
    
    let searchText = userSearchString;
    
    let result = [];
    let courseList = newCourse;
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


export { setUser, flushUser, setSearchResult, searchForMatches };

