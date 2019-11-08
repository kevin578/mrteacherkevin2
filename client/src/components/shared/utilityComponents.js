import React from "react";
import styled from "styled-components";



export const Button = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 3px;
  background: ${(props)=> props.background? props.background : "#ff9000" };
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px #fff;
  }
`;


