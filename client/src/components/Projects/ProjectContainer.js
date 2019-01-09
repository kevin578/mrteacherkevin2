import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: 110px;
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

const VotingContainer = styled.div``;

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

  getBackgroundNumber = ()=> {
    const getRandomInt = (max)=> {
      return Math.floor(Math.random() * Math.floor(max));
    };
    return getRandomInt(colors.length);
  }

  render() {
    const { projectTitle, userName, projectURL } = this.props;
    const backgroundNumber = this.getBackgroundNumber();
    return (
      <Wrapper >
        <TextContainer>
          <ProjectTitle href={projectURL} target="_blank">
            {projectTitle}
          </ProjectTitle>
          <User>by {userName}</User>
        </TextContainer>
        <VotingContainer>
        
        </VotingContainer>
      </Wrapper>
    );
  }
}
