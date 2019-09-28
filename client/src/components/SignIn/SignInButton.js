import React, { Component } from "react";
import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";

const Button = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 3px;
  background: #ff9000;
  text-align: center;
  line-height: 40px;
  &:hover {
    box-shadow: 0px 0px 5px #fff;
  }
`;

const SignInLink = styled.a`
  line-height: 40px;
  margin-left: 40px;
  text-decoration: underline;
  text-decoration: none;
  color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

const AuthContainer = styled.div`
  display: flex;
`;

const SignInButton = props => {
  const buttonClicked = () => {
    console.log("clicked");
  };

  
  return (
    <AuthContainer>
      <Button onClick={buttonClicked()}>Sign up</Button>
      <SignInLink> href="#">Sign in</SignInLink>
    </AuthContainer>
  );
};

export default SignInButton;
