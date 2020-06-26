import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "./resume.css"

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className="universityName">{this.props.schoolName}</h4>
          <p className="faculty">{this.props.faculty}</p>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.program}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
