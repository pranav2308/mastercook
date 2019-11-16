import React from 'react';

const Dashboard = () => {

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

	return(
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Dashboard Page</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default Dashboard;