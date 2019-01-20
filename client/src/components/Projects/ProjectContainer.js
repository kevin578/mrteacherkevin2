import React, { Component } from "react";
import styled from "styled-components";
import VotingIcon from "./VotingIcon";

const Wrapper = styled.div`
  min-height: 130px;
  width: 245px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 30px;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  opacity: .9;
  background: #345afb;
  border-radius: 5px 5px 0px 0px;
  padding: 10px;
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
  margin-top: 20px;
  margin-left: 20px;
  justify-content: space-around;
`;

const colors = [
  {
    background: "#873cc4",
    shadow: "#e5c730"
  },
  {
    background: "#0b935b",
    shadow: "",
  }
];

export default class ProjectContainer extends Component {

  render() {
    const { projectTitle, userName, projectURL, projectId, votes } = this.props;
    return (
      <Wrapper>
        <TextContainer>
          <ProjectTitle href={projectURL} target="_blank">
            {projectTitle}
          </ProjectTitle>
          <User>by {userName}</User>
        </TextContainer>
        <VotingContainer>
          <VotingIcon iconType = "wellDone" projectId = {projectId} votes = {votes.wellDone}/>
          <VotingIcon iconType = "creative" projectId = {projectId} votes = {votes.creative}/>
          <VotingIcon iconType = "fun" projectId = {projectId} votes = {votes.fun}/>
        </VotingContainer>
      </Wrapper>
    );
  }
}

