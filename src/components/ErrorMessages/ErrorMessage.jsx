import React from "react";
import "./ErrorMessage.scss";

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="error-message">
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default ErrorMessage;
