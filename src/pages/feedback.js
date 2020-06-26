import React, { Component } from "react";
import "./aboutMe.css";

class Feedback2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      feedbackArray: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("EVENT: ", event);
    const feedback = this.state.feedbackArray;
    // const content = event.target.value; //-----
    const value = this.state.value;
    feedback.unshift(value);
    console.log(feedback);
    console.log("A feedback was submitted: " + this.state.value);
    this.setState({ content: value, value: "" });
    event.preventDefault();
  }

  render() {
    const feedbackValue = this.state.value;
    const enabled = feedbackValue.length > 10;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="placeholder"
            type="text"
            placeholder="Add your feedback here, please (min 10 characters)."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input disabled={!enabled} type="submit" value="Submit" />
        </form>
        <div>
          {this.state.feedbackArray.map((newfeedback, index) => {
            return (
              <div className="feedback" key={index}>
                <div>
                  <blockquote>
                    <p itemProp="reviewBody">{newfeedback} </p>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
        <blockquote>
          <p itemProp="reviewBody">
            I know Irina Stasii for several years, she has been an example of an
            ambitious, strong woman that is ready to pursue her objectives
            despite any roadblocks and fulfill her goals. She is fast self
            learner, motivated and she has an urge to learn new things and
            acquire new competencies. She is a truly beautiful soul person.Her
            integrity and life goals will pay her back one day. I am very proud
            to know her and learn from her challenging experiences and I fully
            support her new professional endeavor.
          </p>
        </blockquote>
        <blockquote>
          <p itemProp="reviewBody">
            I've known her for about a year and a half now. She is one of the
            most hardworking and creative people I know. She is pretty stubborn
            in the way that she'll work hard to reach her goals. Someone with a
            kind soul.
          </p>
        </blockquote>
        <blockquote>
          <p itemProp="reviewBody">
            I’ve known Irina for not so long, but in this whole time she has
            proven how ambitious and eager to learn she is. I admire her courage
            to take on new heights and be consistent while achieving them. She
            is a very trustworthy and hard-working person, yet humble and
            empathetic. She is also a supportive and carrying friend, which
            anyone would be lucky to have.
          </p>
        </blockquote>
        <blockquote>
          <p itemProp="reviewBody">
        With an entrepreneurial mind and a constant hunger for self-improvement,
        Irina is an outstanding professional who is always seeking new
        opportunities to grow. Irina is a tech-savvy business woman with a great
        and fun personality.
        </p>
        </blockquote>
      </div>
    );
  }
}

export default Feedback2;
