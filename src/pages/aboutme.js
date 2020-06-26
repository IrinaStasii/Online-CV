import React, { Component } from "react";
import "./aboutMe.css";
import IconSkills from "./iconSkills";

import Feedback2 from "./feedback";

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutHeader">
          <h2 id="name"> Irina Stasii</h2>
          <h3 id="tagLine"> Baker, manager, photographer and future</h3>
          <h3> Front-End Developer</h3>
        </div>

        <section id="content">
          <div className="holder twoCol cf">
            <div id="page">
              <h1 id="pageTitle">About Me </h1>
              <p>
                I’m a hard working and dedicated future front-end developer with
                a keen eye for detail, and a determination to deliver a highest
                quality product. I take great pride in my work, and I always try
                to better myself with all I'm working on.
              </p>
              <p>
                I am motivated, enthusiastic and well organised, with a keen eye
                for beautiful design. For now I do not know a lot of things but
                I am doing my best to become better every day because there is
                so much to learn.
              </p>
              <p>
                I like to write code in order to implement visual elements that
                users see and interact with in a web application.
              </p>
              <p>
                {" "}
                It was very hard for me at the beggining to find time to learn,
                work, and manage a business these difficulties never kept me
                away from becoming better and better.
              </p>

              <p>
                It all started in the summer of 2019. At that time, I didn’t
                know quite much about programming. There was no fun for me to
                look at a code that seemed impossible to understand. Magic
                happened when I created my first HTML file with "Hello world"
                and a yellow background color of the body. It was like "WOW" for
                me. In that moment, a whole new world oppened. I then realized
                that I had totally been wrong about my prejudice towards coding.
                And everything started to make sense. Few weeks at The Informal
                School of IT and i began to understand why I wrote a specific
                code and what a line of code does. That felt so right.
              </p>
              <p>
                Now, I can tell that it is something that I really love to do
                and for sure I am going to continue my path to become a
                front-end developer.
              </p>
            </div>

            <section id="right">
              <div className="textWidget">
                <Feedback2 />
              </div>
            </section>
          </div>

          <div className="icons">
            <IconSkills
              icon1={
                <img
                  className="iconSkills"
                  src="http://anthowlett.co.uk/wordpress/wp-content/themes/ant/lib/img/skill/knife.png"
                  alt="Pen knife"
                ></img>
              }
              skill1="Versatile"
              description1="I am able to adapt to any situation that may arise and I am not afraid to get out from my comform zone."
              icon2={
                <img
                  className="iconSkills"
                  src="http://anthowlett.co.uk/wordpress/wp-content/themes/ant/lib/img/skill/tools.png"
                  alt="Tools"
                ></img>
              }
              skill2="Multi-skilled"
              description2="I am focusing on front-end developmet (HTML5, CSS3 & JavaScript). Also, I am experiencing ReactJs"
              icon3={
                <img
                  className="iconSkills"
                  src="http://anthowlett.co.uk/wordpress/wp-content/themes/ant/lib/img/skill/heart.png"
                  alt="Heart"
                ></img>
              }
              skill3="Dedicated"
              description3="I am diligent, conciencious and extremely dedicated to every task that I am given. It is of the utmost importance to me that my clients are satisfied by what I deliver."
              icon4={
                <img
                  className="iconSkills"
                  src="http://anthowlett.co.uk/wordpress/wp-content/themes/ant/lib/img/skill/clock.png"
                  alt="Clock"
                ></img>
              }
              skill4="Efficient"
              description4="I always explore ways of improving my efficiency."
            />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
