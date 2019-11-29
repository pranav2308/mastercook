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


	const { params } = props.match;
	return (

		<div class="courseContainer">

			<div class="courseContent">
				<CourseContent />
			</div>
			<div class="lessonsContainer">
				<Lessons />
			</div>
			<div class="discussionContent">
				<Discussions />
			</div>
		</div>
	);


export default Course;