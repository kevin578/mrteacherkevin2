import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import validator from "email-validator";
import GoogleButton from "./GoogleButton";
import FormButton from "../shared/FormButton";
import TextInput from "../shared/TextInput";
import BirthdaySelect from "./BirthdaySelect";
import { checkUsername } from "../shared/helperFunctions";
import { customStyles, Header, CloseButton, Or_Text } from "./modalStyles";

const SignUpModal = props => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [passwordError, setPasswordError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function clearErrorMessages() {
    setUserNameError("");
    setPasswordError("");
    setBirthdayError("");
    setEmailError("");
  }

  function checkForEmptyInputs() {
    clearErrorMessages();
    if (!checkUsername(userName).success) {
      setUserNameError(checkUsername(userName).msg);
      return true;
    }
    if (!password) {
      setPasswordError("Password cannot be blank.");
      return true;
    } else if (password.length <= 6) {
      setPasswordError("Password must contain at least 6 characters.");
      return true;
    }
    if (month == "Month" || year == "Year") {
      setBirthdayError("Please select a valid birthday");
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
          month,
          year,
          email,
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

  function handleGoogleClick() {
    window.location = "/api/auth/google";
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="signup-modal"
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
        <BirthdaySelect 
          month = {month}
          setMonth = {setMonth}
          year = {year}
          setYear = {setYear}
          birthdayError = {birthdayError}
        />
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
        <GoogleButton text="Sign up with Google" onClick = {handleGoogleClick}/>
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignUpModal;
