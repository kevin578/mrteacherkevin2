import React, { useState } from "react";
import styled from "styled-components";
import { Header, SignupButton } from "./modalStyles";
import TextInput from "../shared/TextInput";

const Instructions = styled.p`
  margin-top: -27 px;
  margin-bottom: 30px;
`;

const BackLink = styled.p`
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function sendEmail() {}

  return (
    <React.Fragment>
      <Header>Forgot Password</Header>
      <Instructions>
        Enter your email, and we will send you instructions to reset your
        password
      </Instructions>
      <TextInput
        loading={isLoading}
        label="Email:"
        name="email"
        value={email}
        errorMessage={emailError}
        onChange={e => setEmail(e.target.value)}
      />
      <SignupButton onClick={sendEmail}>Send reset link</SignupButton>
      <BackLink>Back to Sign in</BackLink>
    </React.Fragment>
  );
};

export default ForgotPassword;
