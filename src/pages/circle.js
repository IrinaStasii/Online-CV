import Circle from "react-circle";
import React, { Component } from "react";
import "./circle.css";

class ProgressCircle extends Component {
  render() {
    return (
      <div className="ProgressCircle">
        <Circle
          className="circle"
          progressColor="#ccb78f"
          progress={this.props.progress}
        />
      </div>
    );
  }
}
export default ProgressCircle;
