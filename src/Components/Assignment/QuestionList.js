import React from 'react';

const QuestionList = (props) => {
  
  return(
     <div class = "questionsContainer">
        <form>
          <div class="form-group question-answer">
            <label id = "question-1" className = "question-text">Question 1. Can you use coconut oil instead of butter while making a cookiee(Yes/No)?  (2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 1)}/>
          </div>
          
          <div class="form-group  question-answer">
            <label id = "question-2" className = "question-text">Question 2. Which ingredient would you use before you bake?  (2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 2)}>
              <option>Select Answer</option>
              <option>Cooking spray</option>
              <option>Flour</option>
              <option>Butter</option>  
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-3" className = "question-text">Question 3. Which of the following is a cooking aid?  (2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect2" onChange = {(event) => props.onChangeSelectAnswers(event, 3)}>
              <option>Select Answer</option>
              <option>Parchment Paper</option>
              <option>Wax paper</option>
              <option>Aluminium foil</option>
              <option>Cooling paper</option>
            </select>
          </div>

          <div class="form-group  question-answer">
            <label id = "question-4" className = "question-text">Question 4. Name an ingredient used in making a chocolate chip cookie dough.  (2 pts)</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {(event) => props.onChangeTextAnswers(event, 4)}></textarea>
          </div>

          <div class="form-group  question-answer">
            <label  id = "question-5" className = "question-text">Question 5. Name a flour that can be used in making cookie dough?  (2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 5)}/>
          </div>

          <div class="form-group question-answer">
            <label id = "question-6" className = "question-text">Question 6. Is it necessary to use unsalted butter while baking a cookie? (2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 6)}/>
          </div>

          <div class="form-group question-answer">
            <label id = "question-7" className = "question-text">Question 7. Foods that are poached are cooked with what?  (2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 7)}>
              <option>Select Answer</option>
              <option>Water</option>
              <option>Oil</option>
              <option>Butter</option>
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-8" className = "question-text">Question 8. What is the name of a person who bakes cookie?  (2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 8)}>
              <option>Select Answer</option>
              <option>Saucier</option>
              <option>Sous chef</option>
              <option>Saucepertise</option>
            </select>
          </div>
          <div class="form-group  question-answer">
            <label id = "question-9" className = "question-text">Question 9. Which of the following is an ingredient not found in cookie?  (2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 9)}>
              <option>Select Answer</option>
              <option>Salt pork</option>
              <option>Curry</option>
              <option>Beef liver</option>
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-10" className = "question-text">Question 10. Can we store soft cookie in a container with lose lid (Yes/No)?  (2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 10)}/>
          </div>

        </form>
    </div>
  );
}

export default QuestionList;