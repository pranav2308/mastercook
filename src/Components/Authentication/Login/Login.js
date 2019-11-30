import React, { Component } from "react";
import "../Login/Login.css";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return <div>in login</div>;
  }
}

/*const Login = () => {

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
		<div className="login-container">
			<table style = {tableStyle}>
		<tbody>
		  <tr>
			<td className="align-middle text-center" style = {bigHeadingStyle}>Login Page</td>
		  </tr>
		</tbody>
	  </table>
	  </div>
		
	);
}*/

export default Login;
