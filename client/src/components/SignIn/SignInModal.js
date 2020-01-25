import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import GoogleButton from "./GoogleButton";
import { customStyles, Header, CloseButton, Or_Text } from "./modalStyles";
import TextInput from "../shared/TextInput";
import FormButton from "../shared/FormButton";
import ForgotPassword from "./ForgotPassword";

const ForgotLink = styled.p`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

const SignInModal = props => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

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

  const signInContent = () => (
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

      <FormButton
        isLoading={isLoading}
        text="Sign in with email"
        onClick={handleSubmit}
      />
      <Or_Text>or</Or_Text>
      <GoogleButton text="Sign in with Google" />
      <ForgotLink onClick={() => setForgotPassword(true)}>
        Forgot Password
      </ForgotLink>
    </React.Fragment>
  );

  function getModalContent() {
    if (forgotPassword) {
      return <ForgotPassword goBackToSignIn={() => setForgotPassword(false)} />;
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
        {getModalContent()}
        <CloseButton onClick={handleClose}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignInModal;
