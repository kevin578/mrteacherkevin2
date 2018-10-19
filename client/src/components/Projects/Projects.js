import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import queryString from "query-string";
import Header from "../Header";
import Main from "../Main/Main";
import ProjectContainer from "./ProjectContainer";
import Sidebar from "../Main/Sidebar";

const ProjectSection = styled.section`
  margin-top: 60px;
  padding: 50px;
`;

class Projects extends Component {
  state = {
    projects: [],
    isLoading: false
  };

  componentDidMount() {
    this.getProjectsFromDatabase();
  }

  getProjectsFromDatabase() {
    this.setState({isLoading: true});
    const query = queryString.parse(this.props.location.search);
    axios.get(`/api/getProjectType/${query.projectURL}`).then(response => {
      this.setState({ 
        projects: response.data,
        isLoading: false
      });
  });
}

  renderProjects() {
    function shortenName(fullName) {
      const firstName = fullName.split(" ")[0];
      const lastInitial = fullName.split(" ")[1][0];
      return `${firstName} ${lastInitial}.`;
    }

    return this.state.projects.map(project => {
      const { projectTitle, projectURL, _id, userName, projectKey } = project;
      const shortenedUserName = shortenName(userName);
      return (
        <ProjectContainer
          key={_id}
          projectId={_id}
          userName={shortenedUserName}
          projectTitle={projectTitle}
          projectURL = {projectURL}

        />
      );
    });
  }

  render() {
    return (
      <Main
        renderProjects={this.renderProjects()}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    projectSubmission: state.projectSubmission
  };
}

export default connect(null)(Projects);
