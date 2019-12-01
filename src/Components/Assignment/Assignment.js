import React from 'react';
import './Assignment.css';
import VerificationEngine from '../VerificationEngine/VerificationEngine';
import firebase from "../../Firebase/firebase";
import { updateQuestionTracker, onChangeTextAnswers, onChangeSelectAnswers, getSideNavList, getQuizProgress } from './helperMethods';
import QuizHeading from './QuizHeading';
import QuestionList from './QuestionList';

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
            const userPoints = VerificationEngine(this.state.questionTracker, correctAnswers, points);
            const userID = firebase.auth.currentUser.uid;

            let { pastAssignments } = this.props.user;
            let newAssignments;
            if(pastAssignments){
                newAssignments = pastAssignments.push({assignmentID: assignmentID, points : userPoints});
            }
            else{
                newAssignments = [{assignmentID: assignmentID, points : userPoints}]
            }

            firebase.database.ref('users/' + userID).update({PastAssignments : newAssignments});
        })
    }
    
    render(){

        const { questionTracker } = this.state;
        const sideNavList = this.getSideNavList(questionTracker);
        const quizProgress = this.getQuizProgress(questionTracker);

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

                <div class = "buttonContainer container">
                    <div className = "row align-items-center">
                        <div className = "col">
                            <button type="button" class="btn btn-primary btn-lg" style = {{marginLeft : '15%'}} onClick = {this.onSubmit}>Submit</button>
                        </div>
                        <div className = "col">
                            <button type="button" class="btn btn-secondary btn-lg" style = {{marginLeft : '15%'}}>Cancel</button>
                        </div>
                    </div>
                </div>

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