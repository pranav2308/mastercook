import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import firebase from "../../Firebase/firebase";
import AccountPreference from "../AccountPreference/AccountPreference";
import Assignment from "../Assignment/Assignment";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Course from "../Course/Course";
import CourseBrowser from "../CourseBrowser/CourseBrowser";
import Dashboard from "../Dashboard/Dashboard";
import Homepage from "../Homepage/Homepage";
import Messages from "../Messages/Messages";
import Navbar from "../Navbar/Navbar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route path="/course/:id" component={Course} />
          <Route path="/courseBrowser/" component={CourseBrowser} />
          <Route path="/settings/" component={AccountPreference} />
          <Route path="/messages" component={Messages} />
          <Route path="/assignment/:id" component={Assignment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
