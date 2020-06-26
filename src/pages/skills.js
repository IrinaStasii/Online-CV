import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import "./resume.css";

class Skills extends Component {
  render() {
    return (
      <Grid className="skillsDiv">
        <Cell col={8}>
          <div className="skills">
            {this.props.skill}
            </div>
            <ProgressBar
             progress={this.props.progress} 
              buffer={this.props.buffer}
            />
        
        </Cell>
        <Cell col={4}>
        <p className="progressNumber">{this.props.progressNumber}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

