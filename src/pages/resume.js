import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Abilities from "./abilities"
import Languages from "./languages"
import "./resume.css";
import { FaLinkedin } from "react-icons/fa";
import ProgressCircle from "./circle"



class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resumePage">
          <Cell col={4} id="fixedDivAboutMe">
            <h2 id="name">Irina Stasii</h2>
            <h4 id="career"> Career Objective </h4>
            <hr />
            <p>
              Self-motivated beginner with knowledge and proficiency
              in JavaScript, HTML, CSS and ReactJs, looking for the position of Entry Level Web Developer.
              The main reason is that Front-End Development satisfies my need for creativity.
            </p>
            <hr />
            <h5 id="address">Address</h5>
            <p>20 Regina Maria Street, Cluj-Napoca</p>
            <h5 id="phone">Phone</h5>
            <p>+40 753 958 472</p>
            <h5 id="email">Email</h5>
            <p>irina.m.stasii@gmail.com</p>
            <hr />
            <a className="resume-icon"href="https://www.linkedin.com/in/irina-stasii-b4a7a3172/">
              <FaLinkedin id="resume-icon" /> <h5>LinkedIn</h5>
            </a>
            <hr />
          </Cell>

          <Cell className="resume-right-col" col={8}>

          <h2>Skills & Abilities</h2>
            <Skills skill="Javascript" progress={30}/> 
            <Skills skill="HTML/CSS" progress={60}/>
            <Skills skill="ReactJS" progress={30}/>
            <Abilities 
            abilities1="Time management"
            abilities2="Motivation"
            abilities3="Flexibility"
            abilities4="Critical thinking"
            abilities5="Teamwork"
            abilities6="Communication"
            abilities7="Problem-solving"
            abilities8="Attention to Detail"
            />
            <hr/>

            <h2>Professional Trainings</h2>
            <Experience
              startYear={2019}
              endYear="present"
              jobName="The Informal School of IT - Web Development module	"
              firstLi="HTML5 and CSS3: understanding the basics of coding and markup language. "
              secondLi="JavaScript: making interactive and functional websites."
              thirdLi="HTTP: requests, responses, API's, Cookies."
              fifthLi="GIT: tracking changes for projects and homework. Create new projects."
              sixthLi="ReactJs Library: developing user interface components. Working on a team project using ReactJs."
            />
            <hr />

            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear="present"
              jobName="Entrepreneur"
              companyName="Sweet MiMi Cluj"
              responsibilities="Responsibilities"
              firstLi="Staffing and Management"
              secondLi="Financial"
              thirdLi="Planning and Strategy"
              fourthLi="Daily Operations"
              fifthLi="Sales and Marketing"
              sixthLi="Customer Service"
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Business Analyst Intern (English and Rusiian)"
              companyName="Evalueserve"
              responsibilities="Responsibilities"
              firstLi="Gather information for a specific market"
              secondLi="Construct workflow charts and diagrams"
              thirdLi="Write newslatters"
              fourthLi="Maintain user confidence and protect operations by keeping information confidential"
              fifthLi="Contribute to team effort by accomplishing related results as needed"
              sixthLi="Interpret, evaluate and interrelate research data"
              />
            <hr />

            <h2 className="languages-title">Languages</h2>
           <div className="language-div"> <Languages language="Romanian:" languageSkills="Native speaker" /> <ProgressCircle progress={100}/> </div>
           <div className="language-div"><Languages language="English:" languageSkills="Independent User"/> <ProgressCircle progress={70}/></div>
           <div className="language-div"> <Languages language="Russian:" languageSkills="Proficient"/><ProgressCircle progress={80}/> </div>
            <hr />

            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2018}
              schoolName="UBB, Babes Bolyai University"
              faculty="Faculty of Business"
              program="Master Program - International Business Administration (english)"
            />
               <Education
              startYear={2013}
              endYear={2016}
              schoolName="UBB, Babes Bolyai University"
              faculty="Faculty of Business"
              program="Undergraduate Program - Business Administration (romanian)"
            />
           
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
