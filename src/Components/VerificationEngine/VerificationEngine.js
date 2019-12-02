const VerificationEngine = (userSubmittedAssignment, correctAnswers, points) => {

	
	const totalQuestions = userSubmittedAssignment.length;

	let userPoints = 0;
	for(let index = 0; index < totalQuestions; index++){
		if(userSubmittedAssignment[index].answer === correctAnswers[index]){
			userPoints += points[index];
		}
	}

	return userPoints;

}

export default VerificationEngine;