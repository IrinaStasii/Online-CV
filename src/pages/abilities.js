import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Abilities extends Component {
  render() {
    return (
      <Grid className="abilitiesDiv">
        <Cell col={6}>
          <ul>
            <li>
              <h6>{this.props.abilities1} </h6>{" "}
            </li>
            <li>
              {" "}
              <h6>{this.props.abilities2} </h6>
            </li>
            <li>
              {" "}
              <h6>{this.props.abilities3} </h6>
            </li>
            <li>
              <h6> {this.props.abilities4} </h6>
            </li>
          </ul>
        </Cell>
        <Cell col={6}>
          <ul>
            <li>
              <h6> {this.props.abilities5}</h6>
            </li>
            <li>
              {" "}
              <h6>{this.props.abilities6}</h6>{" "}
            </li>
            <li>
              {" "}
              <h6>{this.props.abilities7}</h6>{" "}
            </li>
            <li>
              {" "}
              <h6>{this.props.abilities8}</h6>
            </li>
          </ul>
        </Cell>
      </Grid>
    );
  }
}

export default Abilities;
