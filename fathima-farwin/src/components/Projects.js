import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Social Media": {
        title: "social media app",
        desc:
          "Social media platform with a similar functionality to Facebook",
        techStack: "MONGODB, EXPRESS, REACT.JS, NODE.JS",
        link: "https://github.com/farwiinm/fandomit",
        image: "/assets/fandomit.png"
      },
      "Movie Rental": {
        title: "movie rental",
        desc:
          "Allows a user to login or register and rent out a movie and rate a movie",
        techStack: "MONGODB, EXPRESS, REACT.JS, NODE.JS",
        link: "https://github.com/farwiinm/movie-rental",
        image: "/assets/movie.png"
      },
      "Find My Recipe": {
        title: "find my recipe",
        desc:
          "A simple react application that allows you to search up a food item and results in many recipes, taken directly off a free, open source API",
        techStack: "REACT.JS",
        link: "https://github.com/farwiinm/find-my-recipe",
        image: "/assets/food.png"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Projects;
