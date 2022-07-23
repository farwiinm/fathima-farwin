import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"farwin"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-desc">
            I'm a self-taught software developer based in Colombo, Sri Lanka. I have great
            interest in full-stack development, artificial intelligence,
            and everything in between.
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=farwiinm@gmail.com"
            className="intro-contact" target="_blank"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
