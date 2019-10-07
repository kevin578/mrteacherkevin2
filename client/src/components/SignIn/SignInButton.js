import React, { useState } from "react";
import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";
import SignInModal from "./SignInModal";
import { Button } from "../shared/utilityComponents";

const SignInLink = styled.button`
  line-height: 40px;
  margin-left: 40px;
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

const AuthContainer = styled.div`
  display: flex;
`;

const SignInButton = props => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  function toggleModal() {
    setSignUpModal(!signUpModal);
  }

  function toggleSignInModal() {
    setSignInModal(!signInModal);
  }

  return (
    <AuthContainer>
      <Button onClick={toggleModal}>Sign up</Button>
      <SignInLink onClick = {toggleSignInModal}>Sign in</SignInLink>
      <UserInfoModal toggleModal={toggleModal} isOpen={signUpModal} />
      <SignInModal toggleModal = {toggleSignInModal} isOpen = { signInModal } />
    </AuthContainer>
  );
};

export default SignInButton;
