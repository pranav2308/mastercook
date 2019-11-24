import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";

const RegularDiv = (props)=> { 
    return(
    <div class = "login-container">
      <Form>
						<Form.Group>
						<Form.Label>Email: </Form.Label>
						<Form.Control id="email" type="email" placeholder="Enter Email" onChange={props.emailOnChange}/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
						</Form.Group>
					
						<Form.Group>
						<Form.Label>Password: </Form.Label>
						<Form.Control id="password" type="password" placeholder="Enter Password" onChange={props.passwordOnChange}/>
						</Form.Group>
						<Form.Group controlId="formCheckbox">
						<Form.Check type="checkbox" label="Remember Me" />
						</Form.Group>
						<Button variant="primary" type="button" onClick={props.onLogin}>
							Sign in
						</Button>
						<div class="signup-link" onClick={props.onSignup}>
							Not Enrolled? Sign up now.
						</div>
					</Form>
        </div>
                
);
}

const RegisterDiv = (props)=> { 
    return(
        <div class = "register-container">
        <Form>
            <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control id="first-name" type="text" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control id="last-name" type="text" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control id="email" type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control id="username" type="text" placeholder="Enter Username" />
            </Form.Group>
        
            <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control id="password" type="password" placeholder="Enter Password" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control id="password" type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="button" onClick={props.handleRegister}>
                Submit
            </Button>

        </Form>
    </div>
                
);
}

export {RegularDiv, RegisterDiv};