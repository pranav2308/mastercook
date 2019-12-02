import React from 'react';

const ScoreAndButtons = (props) => {

	const assignmentID = props.assignmentID;
    const { pastAssignments } = props.user;
    let isAssignmentSubmitted = false;
    let userPoints;
    if(pastAssignments){
        for(const pastAssignment of pastAssignments){
            if(pastAssignment.assignmentID === assignmentID){
                isAssignmentSubmitted = true;
                userPoints = pastAssignment.points;
                break;
            }
        }
    }

    let buttonContainerElements;
    if(!isAssignmentSubmitted){
        buttonContainerElements = 
         <div className = "row align-items-center">
            <div className = "col">
                <button type="button" class="btn btn-primary btn-lg" style = {{marginLeft : '15%'}} onClick = {props.onSubmit}>Submit</button>
            </div>
            <div className = "col">
                <button type="button" class="btn btn-secondary btn-lg" style = {{marginLeft : '15%'}} onClick = {props.onBackToDashboardButtonClick}>Back to Dashboard</button>
            </div>
        </div>;
    }
    else{
        buttonContainerElements = 
         <div className = "row align-items-center">
            <div className = "col text-center">
                <p class="font-weight-bold">{`Congrats! Your score is ${userPoints}`}</p>
            </div>
            <div className = "col">
                <button type="button" class="btn btn-secondary btn-lg" style = {{marginLeft : '15%'}} onClick = {props.onBackToDashboardButtonClick}>Back to Dashboard</button>
            </div>
        </div>
    }

    return (

        <div className = "buttonContainer container">
            {buttonContainerElements}
        </div>

    );
}


export default ScoreAndButtons; 