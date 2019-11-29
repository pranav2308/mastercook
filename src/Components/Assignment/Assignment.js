import React from 'react';
import './Assignment.css';


class Assignment extends React.Component{

    constructor(props){
        super(props);   
        this.state = {
            questionTracker : []
        }
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

    updateQuestionTracker = (questionNo, newQuestionStatus) => {

        const questionIndex = questionNo - 1;
        const oldQuestionTracker = this.state.questionTracker;
        const newQuestionTracker = oldQuestionTracker.map((oldQuestionStatus, index) =>{
            if(index !== questionIndex ){
                return oldQuestionStatus;
            }
            return newQuestionStatus;
        })
        this.setState({ questionTracker : newQuestionTracker });
        // console.log(this.state);
    }

    onChangeTextAnswers = (event, questionNo) =>{
        
        const answer = event.target.value;

        let questionStatus;
        if(answer !== ''){
            questionStatus = { isAnswered : true, answer : answer};
        }
        else{
            questionStatus = { isAnswered : false, answer : ''};   
        }

        this.updateQuestionTracker(questionNo, questionStatus);

    }

    onChangeSelectAnswers = (event, questionNo) => {
        
        const answer = event.target.value;

        let questionStatus;
        if(answer !== 'Select Answer'){
            questionStatus = { isAnswered : true, answer : answer};
        }
        else{
            questionStatus = { isAnswered : false, answer : ''};   
        }
        this.updateQuestionTracker(questionNo, questionStatus); 
    }

    
    render(){

        const { questionTracker } = this.state;
        const sideNavList = questionTracker.map((questionStatus, index) => {
            
            const questionNo = index + 1;
            const activeStatus = questionStatus.isAnswered ? 'active' : '';
            return <a class={`list-group-item list-group-item-action ${activeStatus}`} href={`#question-${questionNo}`}>{`Question ${questionNo}`}</a>;
        });

        let answeredQuestions = 0;
        for(let questionStatus of questionTracker){
            if(questionStatus.isAnswered){
                answeredQuestions += 1; 
            }
        }
        const totalQuestions = questionTracker.length;
        const quizProgress = Math.round((answeredQuestions/totalQuestions) * 100);

        return(
        
            <div class = "assignmentContainer"> 
               <div class = "sidenav-container">
                   <div id="list-example" class="list-group">
                      {sideNavList}
                    </div>

                    
                </div>
                


                <div class = "headingContainer">
                    <p> Course Name <br/>
                        Quiz Name <br/>
                        Assignment Info : Assignment No. 1 <br/>
                        No. of Questions : 10 <br/>
                        Attempts : 1 <br/>
                        Maximum Marks : 20
                    </p>
                </div>

                <div class = "questionsContainer">
                    <form>
                          <div class="form-group question-answer">
                            <label id = "question-1" className = "question-text">Question 1. What is the step by step process of making beef rice?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => this.onChangeTextAnswers(event, 1)}/>
                          </div>
                          
                          <div class="form-group  question-answer">
                            <label id = "question-2" className = "question-text">Question 2. What is the colour of turmeric?</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.onChangeSelectAnswers(event, 2)}>
                              <option>Select Answer</option>
                              <option>Yellow</option>
                              <option>Red</option>
                              <option>Brown</option>  
                            </select>
                          </div>

                          <div class="form-group question-answer">
                            <label id = "question-3" className = "question-text">Question 3. Which of the following elements can be added in pasta?</label>
                            <select class="form-control" id="exampleFormControlSelect2" onChange = {(event) => this.onChangeSelectAnswers(event, 3)}>
                              <option>Select Answer</option>
                              <option>Salt</option>
                              <option>Pepper</option>
                              <option>Flour</option>
                              <option>Zucchini</option>
                            </select>
                          </div>

                          <div class="form-group  question-answer">
                            <label id = "question-4" className = "question-text">Question 4. Write steps to make tea?</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {(event) => this.onChangeTextAnswers(event, 4)}></textarea>
                          </div>

                          <div class="form-group  question-answer">
                            <label  id = "question-5" className = "question-text">Question 5. What do julienne cuts look like?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => this.onChangeTextAnswers(event, 5)}/>
                          </div>

                          <div class="form-group question-answer">
                            <label id = "question-6" className = "question-text">Question 6. When you cook your pasta al dente, what should the texture be?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => this.onChangeTextAnswers(event, 6)}/>
                          </div>

                          <div class="form-group question-answer">
                            <label id = "question-7" className = "question-text">Question 7. Foods that are poached are cooked with what?</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.onChangeSelectAnswers(event, 7)}>
                              <option>Select Answer</option>
                              <option>Water</option>
                              <option>Oil</option>
                              <option>Butter</option>
                            </select>
                          </div>

                          <div class="form-group question-answer">
                            <label id = "question-8" className = "question-text">Question 8. What is the name of a person who makes sauces in a professional kitchen?</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.onChangeSelectAnswers(event, 8)}>
                              <option>Select Answer</option>
                              <option>Saucier</option>
                              <option>Sous chef</option>
                              <option>Saucepertise</option>
                            </select>
                          </div>

                          <div class="form-group  question-answer">
                            <label id = "question-9" className = "question-text">Question 9. Which of the following is an ingredient found in many Indian dishes?</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.onChangeSelectAnswers(event, 9)}>
                              <option>Select Answer</option>
                              <option>Salt pork</option>
                              <option>Curry</option>
                              <option>Beef liver</option>
                            </select>
                          </div>

                          <div class="form-group question-answer">
                            <label id = "question-10" className = "question-text">Question 10. Whipping egg whites will result in what?</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => this.onChangeTextAnswers(event, 10)}/>
                          </div>

                    </form>
                </div>
                
                <div class = "progress-text">
                    <p className = "font-weight-normal">Quiz Progress</p>
                </div>

                <div className="progress quiz-progress-bar">
                    <div className="progress-bar bg-success" role="progressbar" style = {{width : quizProgress}} aria-valuenow={quizProgress} aria-valuemin="0" aria-valuemax="100">{`${quizProgress}%`}</div>
                </div>

                <div class = "buttonContainer">
                    <button type="button" class="btn btn-primary btn-lg" style = {{marginLeft :'30%', marginRight:'5%'}}>Submit</button>
                    <button type="button" class="btn btn-secondary btn-lg " style = {{marginRight: '30%', marginLeft:'5%'}}>Cancel</button>
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