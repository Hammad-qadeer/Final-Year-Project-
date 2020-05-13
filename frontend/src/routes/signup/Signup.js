import React from "react";
import SignupForm from "./SignupForm";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
       <SignupForm/>
      </div>
    );
  }
}

export default Signup;