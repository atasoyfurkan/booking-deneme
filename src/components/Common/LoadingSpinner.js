import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

class LoadingSpinner extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: window.innerHeight / 2, marginBottom: window.innerHeight / 2 }}
      >
        <Spinner animation="border" />
      </div>
    );
  }
}

export default LoadingSpinner;
