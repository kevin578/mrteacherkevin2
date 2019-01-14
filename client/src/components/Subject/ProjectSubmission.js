import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import styled from "styled-components";

import {
  onProjectURLChange,
  onProjectTitleChange,
  isProjectSubmissionPage,
  isValidUrl,
  addProjectKey
} from "../../actions/projectsActions";

import { TextField } from "./Quiz";

const ProjectSubmissionLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
`;

class ProjectSubmission extends React.Component {
  componentDidMount() {
    this.props.isProjectSubmissionPage(true);
    this.props.isValidUrl(null);
    this.props.addProjectKey(this.props.projectKey);
    this.checkForProjectTitle();
  }

  checkForProjectTitle() {
    const currentProject = _.find(
      this.props.projectSubmission.projectsInDatabase,
      { projectKey: this.props.projectKey }
    );
    if (currentProject) {
      this.props.onProjectTitleChange(currentProject.projectTitle);
      this.props.onProjectURLChange(currentProject.projectURL);
    }
  }
  componentWillUnmount() {
    this.props.isProjectSubmissionPage(false);
    this.props.isValidUrl(null);
  }

  handleTitleChange = event => {
    this.props.onProjectTitleChange(event.target.value);
  };

  handleURLChange = event => {
    this.props.onProjectURLChange(event.target.value);
  };

  render() {
    return (
      <div>
        <div>
          <ProjectSubmissionLabel htmlFor="project_title">
            Title:
          </ProjectSubmissionLabel>
          <TextField
            id="project_title"
            type="text"
            onChange={this.handleTitleChange}
            value={this.props.projectSubmission.projectTitle}
            placeholder="My Totally Awesome Project"
          />
        </div>
        <div>
          <ProjectSubmissionLabel htmlFor="project_url">
            URL:
          </ProjectSubmissionLabel>
          <TextField
            id="project_url"
            type="text"
            onChange={this.handleURLChange}
            value={this.props.projectSubmission.projectURL}
            placeholder="www.myawesomeproject.com"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projectSubmission: state.projectSubmission
  };
}

export default connect(
  mapStateToProps,
  {
    onProjectURLChange,
    onProjectTitleChange,
    isProjectSubmissionPage,
    isValidUrl,
    addProjectKey
  }
)(ProjectSubmission);
