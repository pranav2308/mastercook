import React from 'react';
import './Assignment.css';
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
                
                {/* <div class = "progress-text">
                    <p className = "font-weight-normal">Quiz Progress</p>
                </div> */}

                {/* <div className="progress quiz-progress-bar">
                    <div className="progress-bar bg-success" role="progressbar" style = {{width : quizProgress}} aria-valuenow={quizProgress} aria-valuemin="0" aria-valuemax="100">{`${quizProgress}%`}</div>
                </div> */}

                <div class = "buttonContainer">
                    <button type="button" class="btn btn-primary btn-lg" style = {{marginLeft :'5%', marginRight:'1%'}}>Submit Grades</button>
                    <button type="button" class="btn btn-secondary btn-lg " style = {{marginRight: '5%', marginLeft:'1%'}}>Cancel</button>
                </div>

                <div class = "buttonUpload">
                    <button type="button" class="btn btn-primary btn-lg">Delete Assignment</button>
                </div>    
  
                <input type="text" class="form-control1" id="formGroupExampleInput2" placeholder="Total Points"/>


                {/* <div class = "uploadText">
                    <p className = "font-weight-light font-italic">* Only .pdf format allowed</p>
                </div> */}
            </div>
        );

    }
	
}

export default Assignment;