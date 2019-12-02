import React from 'react';

const AccountPreference = (props) => {

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
	console.log(props.user);
	return(
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Account Preference Page</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default AccountPreference;