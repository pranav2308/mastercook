import React from 'react';

const CourseCard = (props) => {

	const { ImageUrl, ID, Name, InstructorName, Description, progress } = props;
	return (

		<div className="col">
          <div className="card card-addon">
            <img
              src={ImageUrl}
              class="card-img-top"
              alt="Tofu dishes"
              height="200"
            />
            <div class="card-body">
              <h5 class="card-title">{`MC00${ID}: ${Name}`}</h5>
              <i class="card-text">{Description}</i>
              <p class="card-text">
                <span className="font-weight-bold">Intructor:</span>{" "}
                {InstructorName}
              </p>
              <a class="btn btn-primary" onClick = {() => {props.routeToCoursePage(ID)}}>Continue course</a>
            </div>
            <div class="progress">
              <div
                className="progress-bar bg-success progress-bar-addon"
                role="progressbar"
                aria-valuenow={progress}
                style={{ width: progress + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >{`${progress}%`}</div>
            </div>
          </div>
        </div>
	);
}

export default CourseCard;