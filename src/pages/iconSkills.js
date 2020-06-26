import React, { Component } from "react";
import "./aboutMe.css";

class IconSkills extends Component {
  render() {
    return (
     <div className="icon-skills">
          <ul>
           <li>
            {this.props.icon1}
            <h2>{this.props.skill1}</h2>
             <p>{this.props.description1}</p>
             </li>
           
           
             <li>
             {this.props.icon2}
             <h2>{this.props.skill2}</h2>
             <p>{this.props.description2}</p>
             </li>
            
             <li>
            {this.props.icon3}
            <h2>{this.props.skill3}</h2>
             <p>{this.props.description3}</p>
             </li>
          
             <li>
             {this.props.icon4}
             <h2>{this.props.skill4}</h2>
             <p>{this.props.description4}</p>
             </li>

             </ul>
             </div>    

    );
  }
}

export default IconSkills;
