import React, {Component} from 'react';
import firebase from '../../Firebase/firebase';
import {Redirect} from "react-router-dom";
import '../Homepage/Homepage.css';
import {RegularDiv, RegisterDiv} from './DivHelper';

class Homepage extends Component{

  constructor(props){
    super(props);

    this.state = {
      signedIn: false, 
      register: false,
      error: false, 
      message: '', 
      userEmail: '' , 
      userPassword: '', 
      userFirstName: '',
      userLastName: '',
      username: '',
      userConfirmedPassword: '',
      accountType: 'student',
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
    this.accountTypeOnChange = this.accountTypeOnChange.bind(this);
  }

  emailOnChange(event) {
    this.setState({userEmail: event.target.value});
    // console.log(this.state.userEmail);
  }

  passwordOnChange(event) {
    this.setState({userPassword: event.target.value});
    // console.log(this.state.userPassword);
  }

  onLogin = (event) => {
    
    firebase.auth.signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
    .then(() => {
      
      const userID = firebase.auth.currentUser.uid;
      firebase.database.ref('users/' + userID).once('value').then((snapshot) => {
        const { FirstName, LastName, Language, FontSize, Email, AccountType, ProfilePic, ShareProgress, Messages, EnrolledCourses, PastAssignments } = snapshot.val();
        let userObj = {
          firstName : FirstName,
          lastName : LastName,
          accountType : AccountType,
          email : Email,
          fontSize : FontSize,
          profilePic : ProfilePic,
          shareProgress : ShareProgress,
          language : Language
        }
        if(Messages){
          userObj.messages = Messages;
        }
        if(EnrolledCourses){
          userObj.enrolledCourses = EnrolledCourses;
        }
        if(PastAssignments){
          userObj.pastAssignments = PastAssignments;
        }
        this.props.setUser(userObj);
        this.setState({signedIn: true, userEmail: '', userPassword: '', error: false, message: '', register: false});
      })
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.log(errorCode);
      
      if (errorCode === 'auth/wrong-password'){
        alert('Wrong Password.');
      }
      if (errorCode === 'auth/invalid-email'){
        alert('Invalid Email.');
      }
      if (errorCode === 'auth/user-not-found'){
        alert('User Not Found.');
      }
      if (errorCode === 'auth/user-disabled'){
        alert('User-disabled.');
      }

    }); 
  }

  //Processes user email and password through db on submit
  //Creates new user record if user credentials not found in db
  onSignup = (event) => {
    if (!this.state.register){
      this.setState({signedIn: false, error: false, message: '', register: true});
    }
    
  }

  userFirstNameOnChange(event) {
    this.setState({userFirstName: event.target.value});
  }

  userLastNameOnChange(event) {
    this.setState({userLastName: event.target.value});
  }

  userEmailOnChange(event) {
    this.setState({userEmail: event.target.value});
  }

  usernameOnChange(event) {
    this.setState({username: event.target.value});
  }

  userPasswordOnChange(event) {
    this.setState({userPassword: event.target.value});
  }

  confirmedPasswordOnChange(event) {
    this.setState({userConfirmedPassword: event.target.value});
  }

  accountTypeOnChange(event){
    this.setState({accountType : event.target.value});
  }

  handleRegister(event){

    if (this.state.userFirstName == ''){
      alert('First Name Cannot Be Blank.');
    }
    else if (this.state.userLastName == ''){
      alert('Last Name Cannot Be Blank.');
    }
    else if (this.state.userEmail == ''){
      alert('Email Cannot Be Blank.');
    }
    else if (this.state.username == ''){
      alert('Username Cannot Be Blank.');
    }
    else if (this.state.userPassword == ''){
      alert('Password Cannot Be Blank.');
    }
    else if (this.state.userPassword.length < 8){
      alert('Password Must Be More Than 8 Characters.')
    }
    else if (this.state.userConfirmedPassword == ''){
      alert('Please Confirm Password.');
    }
    else if (this.state.userPassword != this.state.userConfirmedPassword) {
      alert('Password and Confirmation Do Not Match.');
    }

    else{
      firebase.auth.createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
      .then((user) => {
            const { userFirstName, userLastName, accountType, userEmail } = this.state;
            firebase.database.ref('users/' + user.user.uid).set({
              FirstName: userFirstName,
              LastName: userLastName,
              AccountType: accountType,
              Email: userEmail,
              EnrolledCourses: [{courseID : 1, progress : 10}, {courseID : 2, progress : 49}, {courseID : 3, progress : 95}],
              FontSize: '12',
              ProfilePic: '',
              Language: 'Eng',
              ShareProgress: false,
              Messages: []
            })
            .then(() => {
              const userObj = {
                firstName: userFirstName,
                lastName: userLastName,
                accountType: accountType,
                email: userEmail,
                enrolledCourses: [],
                fontSize: '12',
                profilePic: '',
                language: 'Eng',
                shareProgress: false,
                messages: []
              }
              this.props.setUser(userObj);
              this.setState({signedIn: true, error: false, message: '', register: false});
            });
        })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        this.setState({error: true, message: errorMessage});

        if (errorCode === 'auth/email-already-in-use'){
          alert('Email Already In Use.');
        }
        if (errorCode === 'auth/invalid-email'){
          alert('Invalid Email.');
        }
        if (errorCode === 'auth/weak-password'){
          alert('Weak Password.');
        }
      });
    }
    
  }

  render(){

    if (this.state.signedIn) {
            return (<Redirect to={"/dashboard"}/>);
        }

    if (this.state.register) {
      return (
        <div class = "homepage-container">
          <div class="bg-image">
          <RegisterDiv 
            handleRegister = {this.handleRegister}  
            userFirstNameOnChange = {this.userFirstNameOnChange}
            userLastNameOnChange = {this.userLastNameOnChange}
            userEmailOnChange = {this.userEmailOnChange}
            usernameOnChange = {this.usernameOnChange}
            userPasswordOnChange = {this.userPasswordOnChange}
            confirmedPasswordOnChange = {this.confirmedPasswordOnChange}
            accountTypeOnChange = {this.accountTypeOnChange}
          />
          </div>
        </div>
      );
    }
    return (
        <div className="homepage-container">

          <RegularDiv
            onSignup={this.onSignup}
            onLogin={this.onLogin}
            emailOnChange={this.emailOnChange}
            passwordOnChange={this.passwordOnChange} />

      <div id="carouselExampleInterval" class="carousel-slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="10">
          <img src="https://assets.epicurious.com/photos/565f34dd87cc73f607397a89/16:9/w_2560%2Cc_limit/EP_11182015_olympia_provisions_inset.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item" data-interval="10">
          <img src="https://cdn2.eyeem.com/thumb/cc3cc4f2a27a34f4b162d723c15403ca364cea7d-1563693080266/w/700" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item"data-interval="10">
          <img src="https://metiza.com/wp-content/uploads/2019/04/healthy-cooking-classes-in-Canada.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  <button type="button" class="btn btn-info">Join us now and get a chance to be a cooking expert at no cost!</button>
  <p>
    <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    About us
    </a>

  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
    It is critical for people to learn to cook their own food for incorporating healthy eating habits and peace of mind. MasterCook aims to teach people to cook food in an easy and interactive way. MasterCook aims to provide competitive, easy-to-use, web-based, interactive tool that will facilitate people to learn to cook from expert instructors at their own convenience.
    </div>
  </div>
    </div>
  );
}
}

export default Homepage;