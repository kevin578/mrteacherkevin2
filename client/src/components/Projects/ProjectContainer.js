import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: 100px;
  width: 245px;
  border: 1px solid #b3bdce;
  border-radius: 5px;
  padding: 10px;
  background: #0b935b;
`;

const ProjectTitle = styled.a`
color: #fff;
display: block;
text-align: center;
font-size: 18px;
`;

const User = styled(ProjectTitle)`
margin-top: 10px;
  font-size: 14px;
`;

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
        
        </VotingContainer>
      </Wrapper>
    );
  }
}
