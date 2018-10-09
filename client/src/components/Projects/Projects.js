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
    projects: []
  }

  componentDidMount() {
    //console.log(queryString.parse(this.props.location.search));
  }

  getProjectsFromDatabase = new Promise((resolve, reject) => {
    const query = queryString.parse(this.props.location.search);
    axios.get(`/api/getProjectType/${query.projectURL}`).then((response)=> {
        this.setState({projects: response.data});
        resolve();
    });
  });

  renderProjects() {
    return this.state.projects. map((project)=> {
      return <ProjectContainer key = {project.projectKey}/>
    });
  }

  render() {
    return (
      <Main
        renderProjects={this.renderProjects()}
        getProjectsFromDatabase={this.getProjectsFromDatabase}
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
