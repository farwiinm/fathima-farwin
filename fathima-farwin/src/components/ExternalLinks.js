import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

class ExternalLinks extends React.Component {
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
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink} target="_blank">
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
      </span>
    );
  }
}

export default ExternalLinks;
