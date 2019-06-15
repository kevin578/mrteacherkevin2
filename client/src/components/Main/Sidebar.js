import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import media from "./mediaQueries";
import SingleProject from "./SingleProject";

const Wrapper = styled.div`
  background: #d7dcf2;
  min-width: 320px;
  @media (max-width: 620px) {
    display: ${props => (props.sidebarIsExpanded ? "block" : "none")};
  }
`;

const SidebarTitle = styled.div`
  width: 100%;
  height: 30px;
  background: #a43ab4;
  text-align: center;
  border-top: 2px solid #979797;
  border-bottom: 1px solid #979797;
  color: white;
  padding-top: 15px;
`;

const AcheivementsTitle = styled(SidebarTitle)`
  margin-top: 60px;
  @media (max-width: 550px) {
    display: ${props => (props.sidebarIsExpanded ? "block" : "none")};
  }
`;

const MyProjectsTitle = styled(SidebarTitle)``;

const Container = styled.div`
  min-height: 80px;
`;

const Achievements = styled(Container)`
  padding: 10px;
  @media (max-width: 550px) {
    display: ${props => (props.sidebarIsExpanded ? "block" : "none")};
  }
`;

const MyProjects = styled(Container)`
  ${media.bigPhone`display: none;`};
`;

export default class Sidebar extends Component {
  state = {
    sidebarIsExpanded: false,
    loadingProjects: false,
    projectArray: []
  };

  componentDidMount() {
    axios.get("/api/getUserProjects").then(projects => {
      const projectArray = projects.data.map(item => {
        return (
          <SingleProject
            key={item.projectTitle}
            title={item.projectTitle}
            subject={item.subject}
            subjectURL = {item.subjectURL}
            projectTitle={item.projectTitle}
            course={item.course}
          />
        );
      });
      this.setState({ projectArray });
    });
    //console.log(userProjects.data);
  }

  render() {
    return (
      <Wrapper>
        <AcheivementsTitle>Achievements</AcheivementsTitle>
        <Achievements sidebarIsExpanded={this.state.sidebarIsExpanded}>
          No Achievements yet...
        </Achievements>
        <MyProjectsTitle>My Projects</MyProjectsTitle>
        <MyProjects>{this.state.projectArray}</MyProjects>
      </Wrapper>
    );
  }
}
