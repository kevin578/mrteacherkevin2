import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinTears, faSplotch, faPaintBrush, faGrin } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: 100px;
  width: 245px;
  border: 1px solid #b3bdce;
  border-radius: 5px;
  padding: 10px;
`;

const VotingIcon = styled(FontAwesomeIcon)`
margin-right: 20px;
font-size: 24px;
cursor: pointer;
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
        <VotingIcon icon= {faSplotch} />  
        <VotingIcon icon= {faPaintBrush}/> 
        <VotingIcon icon= {faGrin}/>  
        </VotingContainer>
      </Wrapper>
    );
  }
}
