import React from 'react';
import './ViewGrades.css';
const ViewGrades = (props) => {

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

	return (

<div className = "container1">


<h1> Grades </h1>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Assignments</th>
      <th scope="col">Grades</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Assignment 1</a></th>
      <td>89/100</td>

    </tr>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Assignment 2</a></th>
      <td>84/100</td>

    </tr>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Assignment 3</a></th>
      <td>46/50</td>

    </tr>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Quiz 1</a></th>
      <td>67/70</td>

    </tr>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Quiz 2</a></th>
      <td>99/100</td>

    </tr>
    <tr>
      <th scope="row"><a href="#" class="text-decoration-none">Quiz 3</a></th>
      <td>87/87</td>
    </tr>
  </tbody>
</table>
</div>
	);

}

export default ViewGrades;