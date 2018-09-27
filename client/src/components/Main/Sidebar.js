import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import media from "./mediaQueries";

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
  padding: 10px;
`;

const Achievements = styled(Container)`
  @media (max-width: 550px) {
    display: ${props => (props.sidebarIsExpanded ? "block" : "none")};
  }
`;

const MyProjects = styled(Container)`
  ${media.bigPhone`display: none;`};
`;

const TapToExpandButton = styled.div`
  postion: absolute;
  margin-left: 320px;
  maring-bottom: 300px;
  width: 40px;
  height: 40px;
  background: red;
`;

export default class Sidebar extends Component {
  state = {
    sidebarIsExpanded: false,
    loadingProjects: false  
  };

  getProjects() {
    // const userProjects = await axios.get("/api/getUserProjects");
    // console.log(userProjects.data);
    return "Hello";
  }

  render() {
    return (
      <Wrapper>
        <AcheivementsTitle>Achievements</AcheivementsTitle>
        <Achievements sidebarIsExpanded={this.state.sidebarIsExpanded}>
          No Achievements yet...
        </Achievements>
        <MyProjectsTitle>My Projects</MyProjectsTitle>
        <MyProjects>{this.getProjects()}</MyProjects>
      </Wrapper>
    );
  }
}
