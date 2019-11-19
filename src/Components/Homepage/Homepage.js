//test comment
import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";
import firebase from '../../Firebase/firebase';
import {Redirect} from "react-router-dom";

class Homepage extends Component{
	constructor(props){
		super(props);

		this.state = {signedIn: false, message: '', error: false};
		this.onSubmit = this.onSubmit.bind(this);
	}

	//Processes user email and password through db on submit
	//Creates new user record if user credentials not found in db
	onSubmit(event){
		event.preventDefault();

		this.email = event.target.email.value;
		this.password = event.target.password.value;

		firebase.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.setState({signedIn: true, error: false, message: ''});
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

				console.log(errorCode);
				
				if (errorCode === 'auth/wrong-password'){
					alert('Wrong Password.');
				}

                if (errorCode === 'auth/user-not-found') {
                    firebase.auth.createUserWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            this.setState({signedIn: true, error: false, message: ''});
                        })
                        .catch((error) => {
                            let errorCode = error.code;
                            let errorMessage = error.message;

                            this.setState({error: true, message: errorMessage});
                        });
                } else {
                    this.setState({error: true, message: errorMessage});
                }

            });
	}

	render(){

		if (this.state.signedIn) {
            return (<Redirect to={"/register"}/>);
        }

		return(
			<Form onSubmit={this.onSubmit}>
  				<Form.Group>
    			<Form.Label>Email: </Form.Label>
    			<Form.Control id="email" type="email" placeholder="Enter email" />
    			<Form.Text className="text-muted">
      				We'll never share your email with anyone else.
    			</Form.Text>
  				</Form.Group>

  				<Form.Group>
    			<Form.Label>Password: </Form.Label>
    			<Form.Control id="password" type="password" placeholder="Password" />
  				</Form.Group>
  				<Form.Group controlId="formCheckbox">
    			<Form.Check type="checkbox" label="Check me out" />
  				</Form.Group>
  				<Button variant="primary" type="submit">
    				Log in/Sign up
  				</Button>
			</Form>
		)
	}
}

/*const Homepage = () => {

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
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Home Page</td>
		    </tr>
		  </tbody>
		</table>
	);
}*/

export default Homepage;