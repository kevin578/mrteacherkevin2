import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #d7dcf2;
  width: 320px;
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
`;

const MyProjectsTitle = styled(SidebarTitle)`
`;

const Container = styled.div`
min-height: 80px;
padding: 10px;
`;

const Achievements = styled(Container)`

`;

const MyProjects = styled(Container)`

`;



export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <AcheivementsTitle>Achievements</AcheivementsTitle>
        <Achievements>
            No Achievements yet...
        </Achievements>
        <MyProjectsTitle>My Projects</MyProjectsTitle>
        <MyProjects>No Projects yet...</MyProjects>
      </Wrapper>
    );
  }
}
