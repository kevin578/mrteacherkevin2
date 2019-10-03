import React, { useState } from "react";
import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";
import { set } from "mongoose";

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
  const [modalIsOpen, setModalIOpen] = useState(false);

  function toggleModal() {
    setModalIOpen(!modalIsOpen)
  }

  return (
    <AuthContainer>
      <Button onClick={toggleModal}>Sign up</Button>
      <SignInLink href="#">Sign in</SignInLink>
      <UserInfoModal toggleModal = {toggleModal} isOpen= {modalIsOpen} />
    </AuthContainer>
  );
};

export default SignInButton;
