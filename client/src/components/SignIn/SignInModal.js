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

const Loader = styled(HalgeniumLoader)`
  position: absolute;
  left: 250px;
`;

const SignInModal = props => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setUserNameError("");
    setPasswordError("");
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

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
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

        <SignupButton onClick={handleClick}>Sign in with email</SignupButton>
        {isLoading && <Loader color="blue" />}
        <Or_Text>or</Or_Text>
        <GoogleButton text="Sign in with Google" />
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignInModal;
