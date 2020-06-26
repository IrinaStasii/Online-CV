import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "./resume.css"

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className="jobName">{this.props.jobName}</h4>
          <p className="company-name"> {this.props.companyName} </p>
          <p className="responsibilities">{this.props.responsibilities}</p>
          <ul>
              <li>{this.props.firstLi} </li>
              <li>{this.props.secondLi} </li>
              <li>{this.props.thirdLi} </li>
              <li>{this.props.fourthLi} </li>
              <li>{this.props.fifthLi} </li>
              <li>{this.props.sixthLi} </li>
              </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
