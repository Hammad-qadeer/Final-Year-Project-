import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./routes/login/Login";
import Signup from "./routes/signup/Signup";
import Forgot from "./routes/forgot/Forgot";
import Home from "./routes/home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
      rolesList: [],
    };
  }

  render() {
    return (
      <Router>
        <div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/appointments" component={Login} />
            <Route exact path="/home/patients" component={Login} />
            <Route exact path="/home/doctors" component={Login} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
