import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 150px;
  width: 245px;
  border: 1px solid #b3bdce;
  border-radius: 5px;
  padding: 10px;

`;

export default class ProjectContainer extends Component {
  render() {
    return (
        <Wrapper>
        <p>Look at my project</p>
        </Wrapper>
    );
  }
}
