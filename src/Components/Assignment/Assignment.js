import React from 'react';
import '../Assignment/Assignment.css';
const Assignment = (props) => {

	const tableStyle = {
		height : '300px',
		marginTop:  '10%',
  		marginLeft: 'auto',
  		marginRight: 'auto'
	}
	const bigHeadingStyle = {
		color : '#7a653f',
		fontWeight: 'bold',
		fontSize : '350%'
	}

	const {params} = props.match;

	return(
		
	<div class = "assignmentContainer"> 
	<div class = "sidenav-container">
	<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Question 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Question 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Question 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 4</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 5</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 6</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 7</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 8</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 9</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Question 10</a>

</div>

			</div>
			
	<div class = "textContainer">
		<p> Course Name <br/>
			Quiz Name <br/>
			Assignment Info : Assignment No. 1 <br/>
			Total Available Time : 2 hours <br/>
			No. of Questions : 10 <br/>
			Attempts : 1 <br/>
			Maximum Marks : 20
		</p>
	<textContainer/>
	</div>
	
	<div class = "questionsContainer">
	<questionsContent/>
	
	</div>
	<div class = "progressContainer">
	<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Question 1. What is the step by step process of making beef rice?</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Question 2. What is the colour of turmeric?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Yellow</option>
      <option>Red</option>
      <option>Brown</option>
    
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Question 3. Which of the following elements can be added in pasta?</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>Salt</option>
      <option>Pepper</option>
      <option>Flour</option>
      <option>Zucchini</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Question 4. Write steps to make tea?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Question 5. What do julienne cuts look like?</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Question 6. When you cook your pasta al dente, what should the texture be?</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Question 7. Foods that are poached are cooked with what?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Water</option>
      <option>Oil</option>
      <option>Butter</option>
    
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Question 8. What is the name of a person who makes sauces in a professional kitchen?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Saucier</option>
      <option>Sous chef</option>
      <option>Saucepertise</option>
    
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Question 9. Which of the following is an ingredient found in many Indian dishes?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Salt pork</option>
      <option>Curry</option>
      <option>Beef liver</option>
    
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Question 10. Whipping egg whites will result in what?</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
</form>

		<progressContainer/>
	</div>
<div class = "buttonContainer">
 <button type="button" class="btn btn-primary btn-lg">Submit Grades</button>
	<button type="button" class="btn btn-secondary btn-lg">Cancel</button>

</div>
<div class = "buttonUpload">
<button type="button" class="btn btn-primary btn-lg">Delete Assignment</button>
</div>

  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter grades"/>
    </div>
    </div>
    
  

</div>



	);
}

export default Assignment;