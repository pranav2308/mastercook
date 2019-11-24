import React from 'react';
import Lessons from '../Lessons/Lessons'
import Discussions from '../Discussions/Discussions'
import CourseContent from '../CourseContent/CourseContent'
import '../Course/Course.css'

const Course = (props) => {


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
}

export default Course;