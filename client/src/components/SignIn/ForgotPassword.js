import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Header } from "./modalStyles";
import FormButton from "../shared/FormButton";
import TextInput from "../shared/TextInput";

const Instructions = styled.p`
  margin-top: -27px;
  margin-bottom: 30px;
`;

const BackLink = styled.p`
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

const ForgotPassword = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function sendEmail() {
    setIsLoading(true);
    axios
      .post("/api/forgotPassword", {
        email
      })
      .then(res => {
        setIsLoading(false);
        if (res.data.message == "email not found") {
          setEmailError("Email not found");
        } else {
          setShowSuccessMessage(true);
        }
      });
  }

  return (
    <React.Fragment>
      <Header>Forgot Password</Header>
      {!showSuccessMessage && (
        <React.Fragment>
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
          <FormButton
            text="Send reset link"
            onClick={sendEmail}
            isLoading={isLoading}
          />
          <BackLink onClick={props.goBackToSignIn}>Back to Sign in</BackLink>
        </React.Fragment>
      )}
      {showSuccessMessage && (
        <p>Instructions to reset your password sent to {email}.</p>
      )}
    </React.Fragment>
  );
};

export default ForgotPassword;
