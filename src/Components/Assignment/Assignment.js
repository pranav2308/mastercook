import React from 'react';
import './Assignment.css';
import VerificationEngine from '../VerificationEngine/VerificationEngine';
import firebase from "../../Firebase/firebase";
import { updateQuestionTracker, onChangeTextAnswers, onChangeSelectAnswers, getSideNavList, getQuizProgress, onBackToDashboardButtonClick } from './helperMethods';
import QuizHeading from './QuizHeading';
import QuestionList from './QuestionList';
import ScoreAndButtons from './ScoreAndButtons';

class Assignment extends React.Component{

    constructor(props){
        super(props);   
        this.state = {
            questionTracker : []
        }
        this.updateQuestionTracker = updateQuestionTracker.bind(this);
        this.onChangeTextAnswers = onChangeTextAnswers.bind(this);
        this.onChangeSelectAnswers = onChangeSelectAnswers.bind(this);
        this.getSideNavList = getSideNavList.bind(this);
        this.getQuizProgress = getQuizProgress.bind(this);
        this.onBackToDashboardButtonClick = onBackToDashboardButtonClick.bind(this);
    }
	

    componentDidMount(){

        const noOfQuestions = 10;

        let questionTracker = [];
        for(let iterator = 0; iterator < noOfQuestions; iterator ++){

            const questionObject = { isAnswered : false, answer : ''};
            questionTracker.push(questionObject);

        }

        this.setState({ questionTracker : questionTracker });
    }


    onSubmit = () => {
        const assignmentID = this.props.match.params.id;
        // console.log(assignmentID)
        firebase.firestore.collection('QuizContent').doc(assignmentID.toString()).onSnapshot(snapshot => {
            const correctAnswers = snapshot.data().CorrectAnswers;
            const points = snapshot.data().Points;
            const courseID = snapshot.data().CourseID;

            //Change progress of the course.
            const oldEnrolledCourses = this.props.user.enrolledCourses;
            const newEnrolledCourses = oldEnrolledCourses.map((courseObj) => {
                if(courseObj.courseID === courseID){
                    const newProgress = courseObj.progress + 10;
                    return{courseID : courseID, progress: newProgress}
                }
                return courseObj;
            })
            this.props.setUser(Object.assign(this.props.user, {enrolledCourses : newEnrolledCourses}));

            const userPoints = VerificationEngine(this.state.questionTracker, correctAnswers, points);
            const userID = firebase.auth.currentUser.uid;

            let { pastAssignments } = this.props.user;
            if(pastAssignments){
                pastAssignments = pastAssignments.push({assignmentID: assignmentID, points : userPoints});
            }
            else{
                pastAssignments = [{assignmentID: assignmentID, points : userPoints}]
            }

            firebase.database.ref('users/' + userID).update({PastAssignments : pastAssignments})
            .then(() => {
                this.props.setUser(Object.assign(this.props.user, {pastAssignments : pastAssignments}));
            });


        })
    }
    
    render(){

        const { questionTracker } = this.state;
        const sideNavList = this.getSideNavList(questionTracker);
        const quizProgress = this.getQuizProgress(questionTracker);

        const assignmentID = this.props.match.params.id;
        const user = this.props.user;



        return(
        
            <div class = "assignmentContainer"> 
               <div class = "sidenav-container">
                   <div id="list-example" class="list-group">
                      {sideNavList}
                    </div>
                </div>

                <QuizHeading />

               <QuestionList onChangeTextAnswers = {this.onChangeTextAnswers} onChangeSelectAnswers = {this.onChangeSelectAnswers}/>
                
                <div class = "progress-text">
                    <p className = "font-weight-normal">Quiz Progress</p>
                </div>

                <div className="progress quiz-progress-bar">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: quizProgress + "%" }} aria-valuenow={quizProgress} aria-valuemin="0" aria-valuemax="100">{`${quizProgress}%`}</div>
                </div>

                <ScoreAndButtons assignmentID = {assignmentID} user = {user} onSubmit = {this.onSubmit} onBackToDashboardButtonClick = {this.onBackToDashboardButtonClick}/>

                <div class = "buttonUpload">
                    <button type="button" class="btn btn-primary btn-lg">Upload</button>
                </div>

                <div class = "uploadText">
                    <p className = "font-weight-light font-italic">* Only .pdf format allowed</p>
                </div>
            </div>
        );

    }
	
}

export default Assignment;