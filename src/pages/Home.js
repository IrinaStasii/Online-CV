import React, { Component } from "react";
import "./Home.css";
import Profile from "./images/Profile.jpg";
import Profile1 from "./images/Profile1.jpg";
import Profile2 from "./images/Profile2.jpg";
import Profile3 from "./images/Profile3.jpg";
import Profile4 from "./images/Profile4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Galery1 from "./images/Galery1.jpg";
import Galery2 from "./images/Galery2.jpg";
import Galery3 from "./images/Galery3.jpg";
import Galery4 from "./images/Galery4.jpg";
import Galery5 from "./images/Galery5.jpg";
import Galery6 from "./images/Galery6.jpg";
import Galery7 from "./images/Galery7.jpg";
import Galery8 from "./images/Galery8.jpg";
import Galery9 from "./images/Galery9.jpg";
import Galery10 from "./images/Galery10.jpg";
import Galery11 from "./images/Galery11.jpg";
import Galery12 from "./images/Galery12.jpg";
import Galery13 from "./images/Galery13.jpg";
import Galery14 from "./images/Galery14.jpg";
import Galery15 from "./images/Galery15.jpg";
import { MDBContainer} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="div1">
            <h5
              style={{
                fontFamily: "Open Sans Condensed sansSerif",
                color: "#ccb78f",
              }}
            >
              {" "}
              About Me{" "}
            </h5>
            <img src={Profile}  alt="radius-profile" />
            <h6>
              {" "}
              Hi! I’m Irina, and welcome to My Portfolio Page. I love baking and I am passionate about Front-End Development. To learn
              more about me and what I'm doing, click here!
            </h6>

            <div className="icons">
              <a href="https://www.facebook.com/irina.malinescu.5?ref=bookmarks">
                <FaFacebook id="icon" />{" "}
              </a>
              <a href="https://www.instagram.com/irina.m.stasii/?hl=en">
                <FaInstagram id="icon" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/irina-stasii-b4a7a3172/">
                <FaLinkedin id="icon" />{" "}
              </a>
            </div>
          </div>
          <div className="scroll-div">
            <div className="div1-div2">
              <div className="div2">
                <Carousel className="home-carousel">
                  <div>
                    <img className="profileImg" src={Profile1} alt="profile"/>
                  </div>
                  <div>
                    <img className="profileImg" src={Profile2} alt="profile"/>
                  </div>
                  <div>
                    <img className="profileImg" src={Profile3} alt="profile"/>
                  </div>
                  <div>
                    <img className="profileImg" src={Profile4} alt="profile"/>
                  </div>
                </Carousel>
              </div>
              <div className="div3">
                <h5
                  style={{
                    fontFamily: "Open Sans Condensed sansSerif",
                  }}
                >
                  Oh haaaay! Thanks for stopping by.
                </h5>
                <h6>
                  {" "}
                  I am a baker, manager and photographer at{" "}
                  <h5
                    style={{
                      fontFamily: "Open Sans Condensed sansSerif",
                      color: "#ccb78f",
                    }}
                  >
                    {" "}
                    Sweet MiMi Cluj{" "}
                  </h5>{" "}
                  and hope, a future Front-End Developer.
                  <br />
                  <br />
                  <br />
                  My adventure began in 2017 when i still was a student at
                  Faculty of Business. This was the moment when i decided to
                  combine my passion for baking with studies that i had in
                  Business Administration.
                  <br /> It was a hard and long way till i saw a result but i
                  learned a lot from this experience. I learned to not give up
                  and this made me stronger. <br />
                  Now, after 3 years, i know that i want something more. I
                  trully want to become a good Front-End Developer so i can
                  combine my hobby and my business with my knowledge in that
                  field.
                </h6>
              </div>
            </div>
            <div className="img-galery">
              <h5>RECENT PHOTOS </h5>

              <img src={Galery1} alt="galery"/>
              <img src={Galery2} alt="galery"/>
              <img src={Galery3} alt="galery"/>
              <img src={Galery4} alt="galery"/>
              <img src={Galery5} alt="galery" />
              <img src={Galery6} alt="galery"/>
              <img src={Galery7} alt="galery"/>
              <img src={Galery8} alt="galery"/>
              <img src={Galery9} alt="galery"/>
              <img src={Galery10} alt="galery"/>
              <img src={Galery11} alt="galery"/>
              <img src={Galery12} alt="galery"/>
              <img src={Galery13} alt="galery"/>
              <img src={Galery14} alt="galery"/>
              <img src={Galery15} alt="galery"/>
            </div>
          </div>
        </div>
        
        <hr className="footer-hr"/>
    <div className="footer-copyright text-center py-3"style={{textAlign: "center"}}> 
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All rights reserved 
        </MDBContainer>
      </div>

      </div>
    );
  }
}

export default Home;
