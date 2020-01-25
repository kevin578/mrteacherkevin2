import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import { months, years } from "./month_year";
import validator from "email-validator";
import GoogleButton from "./GoogleButton";
import FormButton from "../shared/FormButton";
import TextInput from "../shared/TextInput";

import {
  customStyles,
  Header,
  SignupButton,
  CloseButton,
  Or_Text
} from "./modalStyles";

const BirthdaySelect = styled.select`
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: 27px;
  background: url(https://png.pngtree.com/svg/20161117/b360928f8b.svg) 96% / 15%
    no-repeat #fff;
`;

const BirthdayOption = styled.option``;

const BirthdayLabel = styled.label``;

const BirthdayContainer = styled.div`
  margin-bottom: 20px;
`;

const SignUpModal = props => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function setOptions(options) {
    return options.map((optionValue, i) => (
      <BirthdayOption key={`${optionValue}${i}`}>{optionValue}</BirthdayOption>
    ));
  }

  function clearErrorMessages() {
    setUserNameError("");
    setPasswordError("");
    setEmailError("");
  }

  function checkForEmptyInputs() {
    clearErrorMessages();
    if (!userName) {
      setUserNameError("Username cannot be blank.");
      return true;
    }
    if (!password) {
      setPasswordError("Password cannot be blank.");
      return true;
    } else if (password.length <= 6) {
      setPasswordError("Password must contain at least 6 characters.");
      return true;
    }
    if (!email) {
      setEmailError("Email cannot be blank.");
      return true;
    } else if (!validator.validate(email)) {
      setEmailError("Please enter a valid email");
      return true;
    }
    return false;
  }

  function handleEmailSignup() {
    if (checkForEmptyInputs()) {
      return;
    }
    setIsLoading(true);
    axios
      .post("/api/signup-email", null, {
        params: {
          userName,
          password,
          email
        }
      })
      .then(res => {
        setIsLoading(false);
        handleSignupResponse(res);
      });
  }

  function handleSignupResponse(res) {
    if (res.data.error) {
      const { errorType, errorMessage } = res.data;
      handleSignupError(errorType, errorMessage);
    } else {
      window.location.reload();
    }
  }

  function handleSignupError(errorType, errorMessage) {
    const key = {
      userName: setUserNameError,
      password: setPasswordError,
      email: setEmailError
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
        <Header>Sign up</Header>
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

        <BirthdayContainer>
          <BirthdayLabel htmlFor="birth-month">Birthday:</BirthdayLabel>
          <BirthdaySelect name="birth-month">
            {setOptions(months)}
          </BirthdaySelect>
          <BirthdaySelect>{setOptions(years())}</BirthdaySelect>
        </BirthdayContainer>

        <TextInput
          loading={isLoading}
          label="Email:"
          name="email"
          errorMessage={emailError}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormButton
          text="Sign up with email"
          isLoading={isLoading}
          onClick={handleEmailSignup}
        />
        <Or_Text>or</Or_Text>
        <GoogleButton text="Sign up with Google" />
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignUpModal;
