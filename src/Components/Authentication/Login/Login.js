import React from 'react';
import '../Login/Login.css'

const Login = () => {

	const tableStyle = {
		paddingLeft: '10px',
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
		<div class="login-container">
			<table style = {tableStyle}>
		<tbody>
		  <tr>
			<td className="align-middle text-center" style = {bigHeadingStyle}>Login Page</td>
		  </tr>
		</tbody>
	  </table>
	  </div>
		
	);
}

export default Login;