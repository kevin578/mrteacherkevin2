import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import queryString from "query-string";
import {Helmet} from "react-helmet";
import Header from "../Header";
import Main from "../Main/Main";
import ProjectContainer from "./ProjectContainer";
import Sidebar from "../Main/Sidebar";

const ProjectSection = styled(Main)`
  background: #ffcf87;
  
`;

class Projects extends Component {
  state = {
    projects: [],
    isLoading: false,
    title: ""
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
        isLoading: false,
        title: `Projects | ${response.data[0].course}`

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
      const { projectTitle, projectURL, _id, userName } = project;
      const shortenedUserName = shortenName(userName);
      return (
        <ProjectContainer
          key={_id}
          userName={shortenedUserName}
          projectTitle={projectTitle}
          projectURL = {projectURL}
        />
      );
    });
  }

  render() {
    const {state} = this;
    return (
      <React.Fragment>
      <Helmet>
        <title>{state.title}</title>
      </Helmet>
      <ProjectSection
        renderProjects={this.renderProjects()}
        isLoading={this.state.isLoading}
      />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    projectSubmission: state.projectSubmission
  };
}

export default connect(null)(Projects);
