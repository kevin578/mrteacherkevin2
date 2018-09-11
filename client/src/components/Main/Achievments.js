import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 255px;
  height: 300px;
  margin-left: 20px;
  background: #d7dcf2;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-top: 30px;
  margin-left: auto;  
  margin-right: auto;
`;

const Title = styled.p`
text-align: center;
background: #345afb;
margin-top: 0px;
height: 40px;
line-height: 40px;
color: white;
border-radius: 7px 7px 0 0;
`;

export default class Achievements extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Achievments</Title>
      </Wrapper>
    );
  }
}
