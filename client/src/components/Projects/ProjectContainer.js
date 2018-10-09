import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background: green;
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
