import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  border-bottom: solid 2px #979797;
  height: 70px;
  padding-left: 10px;
  cursor: pointer;

`;

const Subject = styled.p``;

const ProjectName = styled.p`
  font-style: italic;
`;

export default class SingleProject extends Component {
  goToProjectPage = ()=> {
    window.location = `/projects?projectURL=${this.props.subjectURL}`;
  }

  render() {
    const { subject, course, subjectURL, title } = this.props;
    return (
      <Wrapper onClick={this.goToProjectPage}>
        <Subject>
          {_.startCase(subject)} {subjectURL.slice(-1)}: {course}
        </Subject>
        <ProjectName>{title}</ProjectName>
      </Wrapper>
    );
  }
}
