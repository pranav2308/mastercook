import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../../Firebase/firebase";
import "../Homepage/Homepage.css";
import { RegisterDiv, RegularDiv } from "./DivHelper";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      register: false,
      error: false,
      message: "",
      userEmail: "",
      userPassword: "",
      userFirstName: "",
      userLastName: "",
      username: "",
      userConfirmedPassword: ""
    };

    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.userFirstNameOnChange = this.userFirstNameOnChange.bind(this);
    this.userLastNameOnChange = this.userLastNameOnChange.bind(this);
    this.userEmailOnChange = this.userEmailOnChange.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.userPasswordOnChange = this.userPasswordOnChange.bind(this);
    this.confirmedPasswordOnChange = this.confirmedPasswordOnChange.bind(this);
  }

  emailOnChange(event) {
    this.setState({ userEmail: event.target.value });
    console.log(this.state.userEmail);
  }

  passwordOnChange(event) {
    this.setState({ userPassword: event.target.value });
    console.log(this.state.userPassword);
  }

  onLogin = event => {
    firebase.auth
      .signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
      .then(() => {
        this.setState({
          signedIn: true,
          userEmail: "",
          userPassword: "",
          error: false,
          message: "",
          register: false
        });
        alert("You Are Signed In!");
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);

        if (errorCode === "auth/wrong-password") {
          alert("Wrong Password.");
        }
        if (errorCode === "auth/invalid-email") {
          alert("Invalid Email.");
        }
        if (errorCode === "auth/user-not-found") {
          alert("User Not Found.");
        }
        if (errorCode === "auth/user-disabled") {
          alert("User-disabled.");
        }
      });
  };

  //Processes user email and password through db on submit
  //Creates new user record if user credentials not found in db
  onSignup = event => {
    if (!this.state.register) {
      this.setState({
        signedIn: false,
        error: false,
        message: "",
        register: true
      });
    }
  };

  userFirstNameOnChange(event) {
    this.setState({ userFirstName: event.target.value });
  }

  userLastNameOnChange(event) {
    this.setState({ userLastName: event.target.value });
  }

  userEmailOnChange(event) {
    this.setState({ userEmail: event.target.value });
  }

  usernameOnChange(event) {
    this.setState({ username: event.target.value });
  }

  userPasswordOnChange(event) {
    this.setState({ userPassword: event.target.value });
  }

  confirmedPasswordOnChange(event) {
    this.setState({ userConfirmedPassword: event.target.value });
  }

  handleRegister(event) {
    if (this.state.userFirstName == "") {
      alert("First Name Cannot Be Blank.");
    }
    if (this.state.userLastName == "") {
      alert("Last Name Cannot Be Blank.");
    }
    if (this.state.userEmail == "") {
      alert("Email Cannot Be Blank.");
    }
    if (this.state.username == "") {
      alert("Username Cannot Be Blank.");
    }
    if (this.state.userPassword == "") {
      alert("Password Cannot Be Blank.");
    }
    if (this.state.userPassword.length < 8) {
      alert("Password Must Be More Than 8 Characters.");
    }
    if (this.state.userConfirmedPassword == "") {
      alert("Please Confirm Password.");
    }
    if (this.state.userPassword != this.state.userConfirmedPassword) {
      alert("Password and Confirmation Do Not Match.");
    }

    firebase.auth
      .createUserWithEmailAndPassword(
        this.state.userEmail,
        this.state.userPassword
      )
      .then(() => {
        this.setState({
          signedIn: true,
          error: false,
          message: "",
          register: false
        });
        firebase.firestore
          .collection("Users")
          .doc(this.state.username)
          .set({
            FirstName: this.state.userFirstName,
            LastName: this.state.userLastName,
            Email: this.state.userEmail
          })
          .then(() => {
            console.log("account created");
          });
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;

        this.setState({ error: true, message: errorMessage });

        if (errorCode === "auth/email-already-in-use") {
          alert("Email Already In Use.");
        }
        if (errorCode === "auth/invalid-email") {
          alert("Invalid Email.");
        }
        if (errorCode === "auth/weak-password") {
          alert("Weak Password.");
        }
      });
  }

  render() {
    if (this.state.signedIn) {
      return <Redirect to={"/dashboard"} />;
    }

    if (this.state.register) {
      return (
        <div className="homepage-container">
          <div className="bg-image">
            <RegisterDiv
              handleRegister={this.handleRegister}
              userFirstNameOnChange={this.userFirstNameOnChange}
              userLastNameOnChange={this.userLastNameOnChange}
              userEmailOnChange={this.userEmailOnChange}
              usernameOnChange={this.usernameOnChange}
              userPasswordOnChange={this.userPasswordOnChange}
              confirmedPasswordOnChange={this.confirmedPasswordOnChange}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="homepage-container">
        <div>
          <font size="7" color="white">
            Join Us Now!
          </font>
        </div>
        <RegularDiv
          onSignup={this.onSignup}
          onLogin={this.onLogin}
          emailOnChange={this.emailOnChange}
          passwordOnChange={this.passwordOnChange}
        />
      </div>
    );
  }
}

export default Homepage;
