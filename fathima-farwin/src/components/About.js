import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        Currently <b>self-learning</b> and developing skills in the <b>MERN stack</b>. I am a <b>Biotechnology diploma graduate</b> from
        <a href="https://www.bms.ac.lk/">
          {" "}
          Business Management School{" "}
        </a>
        and an Alumni of{" "}
        <a href="https://royalinstitute.org/our-profile/">Royal Institute</a>
        . I started self-learning web development mid-2022 with the hope of getting into the tech industry.
      </p>
    );
    const two = (
      <p>
        Besides tech, I'm interested in following the developments of
        genetic science and research. I also have worked as a Math, science and IT teacher for children and adults for 2+ years.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Express",
      "Node.js",
      "MongoDB",
      "SQL",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
