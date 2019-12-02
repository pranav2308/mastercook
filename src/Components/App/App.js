import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import firebase from "../../Firebase/firebase";
import AccountPreference from "../AccountPreference/AccountPreference";
import Assignment from "../Assignment/Assignment";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AuthorizationProtectedRoute from "../AuthorizationProtectedRoute/AuthorizationProtectedRoute";
import Course from "../Course/Course";
import CourseBrowser from "../CourseBrowser/CourseBrowser";
import Dashboard from "../Dashboard/Dashboard";
import Homepage from "../Homepage/Homepage";
import Logout from "../Logout/Logout";
import Messages from "../Messages/Messages";
import Navbar from "../Navbar/Navbar";
import PageNotFound from "../PageNotFound/PageNotFound";
import ViewGrades from "../ViewGrades/ViewGrades";
import ViewStudents from "../ViewStudents/ViewStudents";
import "./App.css";
import { flushUser, setUser } from "./helperMethods";
import emptyUser from "./helperObjects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: emptyUser,
      isSignedIn: false
    };
    this.setUser = setUser.bind(this);
    this.flushUser = flushUser.bind(this);
  }

  componentWillMount() {
    var _this = this;
    firebase.auth.onAuthStateChanged(
      function(user) {
        _this.setState({ user: user });
      },
      function(error) {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <Router>
        <Navbar isSignedIn={this.state.isSignedIn} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Homepage {...props} setUser={this.setUser} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <AuthorizationProtectedRoute
            exact
            path="/dashboard/"
            isSignedIn={this.state.isSignedIn}
            component={Dashboard}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/course/:id"
            isSignedIn={this.state.isSignedIn}
            component={Course}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/courseBrowser/"
            isSignedIn={this.state.isSignedIn}
            component={CourseBrowser}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/settings/"
            isSignedIn={this.state.isSignedIn}
            component={AccountPreference}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/messages"
            isSignedIn={this.state.isSignedIn}
            component={Messages}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/assignment/:id"
            isSignedIn={this.state.isSignedIn}
            component={Assignment}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/viewGrades/"
            isSignedIn={this.state.isSignedIn}
            component={ViewGrades}
            user={this.state.user}
            setUser={this.setUser}
          />
          <AuthorizationProtectedRoute
            path="/viewStudents/"
            isSignedIn={this.state.isSignedIn}
            component={ViewStudents}
            user={this.state.user}
            setUser={this.setUser}
          />
          <Route
            path="/logout/"
            render={props => <Logout {...props} flushUser={this.flushUser} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
