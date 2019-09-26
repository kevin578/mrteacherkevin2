import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 3px;
  background: orange;
  
`;

export default class SignInButton extends Component {
  buttonClicked = () => {
    //console.log(clicked);
  };

  render() {
    return <Button onClick={this.buttonClicked}>saldfj;alsdkjf</Button>;
  }
}
