import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
