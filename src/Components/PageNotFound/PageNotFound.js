import React from 'react';

const PageNotFound = (props) => {

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
	const smallHeadingStyle = {
		color : '#7a653f',
		fontWeight: 'bold',
		fontSize : '250%'	
	}

	const {params} = props.match;

	return(
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>This Page does not exist!</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>Stop fooling around and get back to cooking!</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default PageNotFound;