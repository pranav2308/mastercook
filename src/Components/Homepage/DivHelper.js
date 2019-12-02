import React from "react";
import { Button, Form } from "react-bootstrap";

const RegularDiv = props => {
  return (
    <div className="login-container">
      <Form>
        <Form.Group>
          <Form.Control
            id="email"
            type="email"
            placeholder="Enter Email"
            onChange={props.emailOnChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={props.passwordOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.onLogin}>
          Sign in
        </Button>
        <div className="signup-link" onClick={props.onSignup}>
          Not Enrolled? Sign up now.
        </div>
      </Form>
    </div>
  );
};

const RegisterDiv = props => {
  return (
    <div className="register-container">
      <Form>
        <Form.Group>
          <Form.Control
            id="first-name"
            type="text"
            placeholder="First Name"
            onChange={props.userFirstNameOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="last-name"
            type="text"
            placeholder="Last Name"
            onChange={props.userLastNameOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email"
            onChange={props.userEmailOnChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="username"
            type="text"
            placeholder="Username"
            onChange={props.usernameOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            onChange={props.userPasswordOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            id="password"
            type="password"
            placeholder="Confirm Password"
            onChange={props.confirmedPasswordOnChange}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Account Type</Form.Label>
          <Form.Control as="select" onChange = {props.accountTypeOnChange}>
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="button" style = {{marginLeft : '23%'}}onClick={props.handleRegister}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export { RegularDiv, RegisterDiv };
