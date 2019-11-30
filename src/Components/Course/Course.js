import React from "react";
import "../Course/Course.css";
import CourseContent from "../CourseContent/CourseContent";
import Discussions from "../Discussions/Discussions";
import Lessons from "../Lessons/Lessons";

const Course = props => {
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
    </div>
  );
};

export default Course;