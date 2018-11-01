import React, { Component } from "react";
import styled from "styled-components";
import VotingIcon from "./VotingIcon";

const Wrapper = styled.div`
  height: 100px;
  width: 245px;
  box-shadow: 3px 3px 0px 2px rgba(247, 122, 39,0.74);
  border-radius: 5px;
  padding: 10px;
  background: #0b935b;
  margin-bottom: 30px;
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


const VotingContainer = styled.div`
  display: flex;
`;

export default class ProjectContainer extends Component {

  render() {
    const { projectTitle, userName, projectURL, projectId } = this.props;
    return (
      <Wrapper>
        <ProjectTitle href={projectURL} target="_blank">
          {projectTitle}
        </ProjectTitle>
        <User>by {userName}</User>
        <VotingContainer>
          <VotingIcon iconType = "wellDone" projectId = {projectId}/>
          <VotingIcon iconType = "creative" projectId = {projectId}/>
          <VotingIcon iconType = "fun" projectId = {projectId}/>
        </VotingContainer>
      </Wrapper>
    );
  }
}
