import React from 'react';

const QuestionList = (props) => {
  
  return(
     <div class = "questionsContainer">
        <form>
          <div class="form-group question-answer">
            <label id = "question-1" className = "question-text">Question 1. What do you add sugar or salt while making rice? (2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 1)}/>
          </div>
          
          <div class="form-group  question-answer">
            <label id = "question-2" className = "question-text">Question 2. What is the colour of turmeric?(2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 2)}>
              <option>Select Answer</option>
              <option>Yellow</option>
              <option>Red</option>
              <option>Brown</option>  
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-3" className = "question-text">Question 3. Which of the following elements cannot be added in pasta?(2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect2" onChange = {(event) => props.onChangeSelectAnswers(event, 3)}>
              <option>Select Answer</option>
              <option>Salt</option>
              <option>Pepper</option>
              <option>Flour</option>
              <option>Zucchini</option>
            </select>
          </div>

          <div class="form-group  question-answer">
            <label id = "question-4" className = "question-text">Question 4. What is color of chilli powder?(2 pts)</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {(event) => props.onChangeTextAnswers(event, 4)}></textarea>
          </div>

          <div class="form-group  question-answer">
            <label  id = "question-5" className = "question-text">Question 5. What do julienne cuts look like?(2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 5)}/>
          </div>

          <div class="form-group question-answer">
            <label id = "question-6" className = "question-text">Question 6. When you cook your pasta al dente, what should the texture be?(2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 6)}/>
          </div>

          <div class="form-group question-answer">
            <label id = "question-7" className = "question-text">Question 7. Foods that are poached are cooked with what?(2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 7)}>
              <option>Select Answer</option>
              <option>Water</option>
              <option>Oil</option>
              <option>Butter</option>
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-8" className = "question-text">Question 8. What is the name of a person who makes sauces in a professional kitchen?(2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 8)}>
              <option>Select Answer</option>
              <option>Saucier</option>
              <option>Sous chef</option>
              <option>Saucepertise</option>
            </select>
          </div>
          <div class="form-group  question-answer">
            <label id = "question-9" className = "question-text">Question 9. Which of the following is an ingredient found in many Indian dishes?(2 pts)</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => props.onChangeSelectAnswers(event, 9)}>
              <option>Select Answer</option>
              <option>Salt pork</option>
              <option>Curry</option>
              <option>Beef liver</option>
            </select>
          </div>

          <div class="form-group question-answer">
            <label id = "question-10" className = "question-text">Question 10. Whipping egg whites will result in what?(2 pts)</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" onChange = {(event) => props.onChangeTextAnswers(event, 10)}/>
          </div>

        </form>
    </div>
  );
}

export default QuestionList;