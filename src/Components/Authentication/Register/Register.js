import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-container">
        <div className="register-container">
          <Form onSubmit={this.onLogin}>
            <Form.Group>
              <Form.Label>WE ARE IN REGISTER: </Form.Label>
              <Form.Control id="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
            <div className="signup-link" onClick={this.onSignup}>
              Not Enrolled? Sign up now.
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

/*const Register = () => {

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
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Registration Page</td>
		    </tr>
		  </tbody>
		</table>
	);
}*/

export default Register;
