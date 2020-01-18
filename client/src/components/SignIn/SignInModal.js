import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import GoogleButton from "./GoogleButton";
import {
  customStyles,
  Header,
  SignupButton,
  CloseButton,
  Or_Text
} from "./modalStyles";
import TextInput from "../shared/TextInput";
import { ClipLoader as HalgeniumLoader } from "halogenium";
import ForgotPassword from "./ForgotPassword";

const Loader = styled(HalgeniumLoader)`
  position: absolute;
  left: 250px;
`;

const ForgotLink = styled.a`
  display: block;
  margin-top: 15px;
  font-size: 14px;
`;

const SignInModal = props => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(true);

  function clearFields() {
    setUserName("");
    setPassword("");
    setUserNameError("");
    setPasswordError("");
  }

  function handleClose() {
    clearFields();
    props.toggleModal();
  }

  function checkForBlanks() {
    if (userName === "") {
      setUserNameError("Username cannot be blank.");
      return true;
    }
    if (password === "") {
      setPasswordError("Password cannot be blank");
      return true;
    }
    return false;
  }

  function handleSubmit() {
    setUserNameError("");
    setPasswordError("");
    if (checkForBlanks()) {
      return;
    }
    setIsLoading(true);
    axios
      .post("/api/signin-email", null, {
        params: {
          userName,
          password
        }
      })
      .then(res => {
        setIsLoading(false);
        handleSigninResponse(res);
      });
  }

  function handleSigninResponse(res) {
    if (res.data.error) {
      const { errorType, errorMessage } = res.data;
      handleSigninError(errorType, errorMessage);
    } else {
      window.location.reload();
    }
  }

  function handleSigninError(errorType, errorMessage) {
    const key = {
      userName: setUserNameError,
      password: setPasswordError
    };
    const setErrorMessage = key[errorType];
    setErrorMessage(errorMessage);
  }

  const signInContent = ()=> (
    <React.Fragment>
      <Header>Sign in</Header>

      <TextInput
        loading={isLoading}
        label="Username:"
        name="username"
        value={userName}
        errorMessage={userNameError}
        onChange={e => setUserName(e.target.value)}
      />
      <TextInput
        loading={isLoading}
        label="Password:"
        name="password"
        type="password"
        errorMessage={passwordError}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <SignupButton onClick={handleSubmit}>Sign in with email</SignupButton>
      {isLoading && <Loader color="blue" />}
      <Or_Text>or</Or_Text>
      <GoogleButton text="Sign in with Google" />
      <ForgotLink href="/api/forgotPassword">Forgot Password</ForgotLink>
    </React.Fragment>
  );

  function getModalContent() {
    if (forgotPassword) {
      return <ForgotPassword />;
    } else {
      return signInContent();
    }
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Sign in Modal"
      >
        { getModalContent() }
        <CloseButton onClick={handleClose}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignInModal;
