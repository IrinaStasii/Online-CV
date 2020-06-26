import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Languages extends Component {
  render() {
    return (
      <Grid className="languages">
        <Cell col={3}>
          <h4>{this.props.language}</h4>
        </Cell>

        <Cell col={3}>
          <div className="languageSkills">
    <h6>{this.props.languageSkills}</h6>
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default Languages;
