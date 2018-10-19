import React, { Component } from "react";
import styled from "styled-components";
import VotingIcon from "./VotingIcon";

const Wrapper = styled.div`
  height: 100px;
  width: 245px;
  border: 1px solid #b3bdce;
  border-radius: 5px;
  padding: 10px;
`;


const ProjectTitle = styled.a``;

const User = styled.p``;

const VotingContainer = styled.div``;

export default class ProjectContainer extends Component {
  render() {
    const { projectTitle, userName, projectURL } = this.props;
    return (
      <Wrapper>
        <ProjectTitle href={projectURL} target="_blank">
          {projectTitle}
        </ProjectTitle>
        <User>by {userName}</User>
        <VotingContainer>
          <VotingIcon iconType = "fun"/>
        </VotingContainer>
      </Wrapper>
    );
  }
}
