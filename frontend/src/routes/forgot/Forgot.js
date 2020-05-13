import React from "react";
import ForgotForm from "./ForgotForm";

class Forgot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
       <ForgotForm/>
      </div>
    );
  }
}

export default Forgot;
