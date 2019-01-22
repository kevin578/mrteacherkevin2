import React, { Component } from 'react'
import styled from "styled-components";


const Button = styled.div`
    width: 200px;
    height: 80px;
    background: "orange";
`

export default class SignInButton extends Component {

    buttonClicked = ()=> {
        console.log(clicked);
    }

  render() {
    return (
      <Button 
        onClick = {this.buttonClicked}
      />
    );
  }
}
