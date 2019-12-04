import React from 'react';
import firebase from "../../Firebase/firebase";

class QuizHeading extends React.Component{


	constructor(props){
		super(props);
		this.state = {
			courseName: '',
			quizName: '',
			totalQuestions: '',
			attempts: '',
			maximumMarks: ''
		}
	}

	componentDidMount(){
		const {assignmentID} = this.props;
		firebase.firestore.collection('QuizContent').doc(assignmentID.toString()).onSnapshot(snapshot => {
			const data = snapshot.data();
			this.setState({
				courseName: data.CourseName,
				quizName: data.QuizName,
				totalQuestions: data.TotalQuestions,
				attempts: data.Attempts,
				maximumMarks: data.MaximumMarks
			})
			
		});	
	}
	

	render(){
		const {courseName, quizName, totalQuestions, attempts, maximumMarks } = this.state;
		const {assignmentID} = this.props;
		return (
			<div class = "headingContainer">
		        <p> Course Name : {courseName}<br/>
		            Quiz Name : {quizName}<br/>
		            Assignment Info : Assignment No. {assignmentID} <br/>
		            No. of Questions : {totalQuestions} <br/>
		            Attempts : {attempts} <br/>
		            Maximum Marks : {maximumMarks}
		        </p>
		    </div>
		);	
	}
	
}


export default QuizHeading;