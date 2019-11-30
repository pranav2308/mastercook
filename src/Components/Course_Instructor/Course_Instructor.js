import React from "react";
import "../Course_Instructor/Course_Instructor.css";
import CourseContent from "../CourseContent/CourseContent";
import Discussions from "../Discussions/Discussions";
import Lessons from "../Lessons/Lessons";

const Course_Instructor = props => {
  const { params } = props.match;
  return (
    <div className="courseContainer">
      <div className="courseContent">
        <CourseContent />
      </div>
      <div className="lessonsContainer">
        <Lessons />
      </div>
      <div className="discussionContent">
        <Discussions />
      </div>

      <div class="btn-group-vertical">
      <button type="button" class="btn btn-primary btn-lg"> Add Course Content</button>
<button type="button" class="btn btn-primary btn-lg"> Delete Course Content</button>
    <button type="button" class="btn btn-secondary btn-lg"> View Assignment</button>
    </div>
    </div>
  );
};

export default Course_Instructor;
