import React, { Component } from 'react';
import styled from 'styled-components';


export const Wrapper = styled.button`
    border: 4px solid #4C6EFF;
    background: #4C6EFF;
    box-shadow: 0 2px 4px 0 rgba(168,168,168,0.50);
    border-radius: 10px;
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #fff;
    width: 100px;
    height: 40px;
    margin-top: 50px;
    cursor: pointer;
` 


export default class Button extends Component {
  render() {
    return (
      <div>
          <Wrapper>{this.props.children}</Wrapper>
      </div>
    )
  }
}
