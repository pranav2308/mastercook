import React from 'react';

function updateQuestionTracker(questionNo, newQuestionStatus){

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

function onChangeTextAnswers(event, questionNo){
        
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


function onChangeSelectAnswers(event, questionNo){
        
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

function getSideNavList(questionTracker){

    return questionTracker.map((questionStatus, index) => {
            
        const questionNo = index + 1;
        const activeStatus = questionStatus.isAnswered ? 'active' : '';
        return <a class={`list-group-item list-group-item-action ${activeStatus}`} href={`#question-${questionNo}`}>{`Question ${questionNo}`}</a>;
    });
}


function getQuizProgress(questionTracker){
    
    let answeredQuestions = 0;
    for(let questionStatus of questionTracker){
        if(questionStatus.isAnswered){
            answeredQuestions += 1; 
        }
    }
    const totalQuestions = questionTracker.length;
    return Math.round((answeredQuestions/totalQuestions) * 100);
}

export { updateQuestionTracker, onChangeTextAnswers, onChangeSelectAnswers, getSideNavList, getQuizProgress };