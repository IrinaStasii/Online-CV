import React, { Component } from "react";
import "./projects.css";
import website1 from "./images/website1.png";
import website2 from "./images/website2.png";
import website3 from "./images/website3.png";
import website4 from "./images/website4.png";
import website5 from "./images/website5.png";
import website6 from "./images/website6.png";
import responsive from "./images/responsive.jpg";
import makeItSimple from "./images/makeItSimple.png";
import { FaGithub } from "react-icons/fa";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="firstProject">
          <div className="leftSideResponsiveImage">
              <div className="description">
            <h2>Movie Website</h2>
            <h4>The final course project from The Informal School of IT - Web Development module.</h4><br/>
            <div id="git">
            <h5>You can find it on GitHub</h5>
            <a href="https://github.com/IrinaStasii/Movie-website">
                <FaGithub id="gitIcon" />{" "}
              </a>
              </div>
              </div>
              <img src={responsive} id="responsive" alt="responsive" />
          </div>
          <h4 id="projectDetails">Few details about the project</h4>
          <div class="row">
        <div className="websiteImages">
          <div className="cardProject">
            <img
              src={website3}
              id="website3"
              className="card-img-top"
              alt="website3"
            />
              <p className="card-text">
                This project was created with ReactJS Library. We started with an API were we took information from. We made it responsive for all devices.
              </p>
            </div>
          <div className="cardProject">
            <img
              src={website1}
              id="website1"
              className="card-img-top"
              alt="website1"
            />
            <div className="card-body">
              <p className="card-text">
                In order to delete, edit or add a movie, we needed to create a Register/Login/Logout functionality.
              </p>
              </div>
            </div>
          <div className="cardProject">
            <img
              src={website2}
              id="website2"
              className="card-img-top"
              alt="website2"
            />
            <div className="card-body">
              <p className="card-text">
                Advanced Search was the page where we could find a movie depending on fields that were completed.
              </p>
            </div>
          </div>

          <div className="cardProject">
            <img
              src={website4}
              id="website4"
              className="card-img-top"
              alt="website4"
            />
            <div className="card-body">
              <p className="card-text">
               On click, you could see information about that movie, delete or edit it (only if you was registered).
              </p>
              </div>
            </div>
            <div className="cardProject">
            <img
              src={website5}
              id="website5"
              className="card-img-top"
              alt="website5"
            />
            <div className="card-body">
              <p className="card-text">
               Search by title input triggered on enter press.
              </p>
              </div>
            </div>
            <div className="cardProject">
            <img
              src={website6}
              id="website6"
              className="card-img-top"
              alt="website6"
            />
            <div className="card-body">
              <p className="card-text">
            Results are paginated. Each page returns 10 movies. 
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="secondProject">
          <div className="leftSideResponsiveImage">
              <div className="description">
            <h2>Make It Simple</h2>
            <h4>First simple team project from the course with meal recipes that were taken from an API. </h4><br/>
            <div id="git">
            <h5>You can find it on GitHub</h5>
            <a href="https://github.com/IrinaStasii/Make-It-Simple">
                <FaGithub id="gitIcon" />{" "}
              </a>
              </div>
              </div>
              <img src={makeItSimple} id="makeItSimple" alt="makeItSimple" />
          </div>
          </div>
      </div>
    );
  }
}

export default Projects;
