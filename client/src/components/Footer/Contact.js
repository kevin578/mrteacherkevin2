import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DefaultLayout from "../DefaultLayout";
import TextInput from "../shared/TextInput";
import FormButton from "../shared/FormButton";

const MessageInput = styled.textarea`
  margin-left: 21px;
  width: 380px;
  height: 200px;
  vertical-align: top;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 16px;
  resize: none;
`;

const MessageLabel = styled.label`
  position: relative;
  top: 11px;
`;

const FormButtonStyle = {
  marginTop: 60,
  width: 150
};

const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  margin-left: 94px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    "Your message has been successfully submitted. We will get back to you soon."
  );
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

  function validateForm() {
    setEmailError("");
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return setEmailError("Enter a valid email.");
    }
    if (!message) {
      return setMessageError("Message cannot be blank");
    }
    sendEmail();
  }

  function sendEmail() {
    setIsLoading(true);
    axios
      .post("/api/sendContactEmail", null, {
        params: {
          name,
          email,
          message
        }
      })
      .then(() => {
        setIsLoading(false);
        setSuccessfullySubmitted(true);
      })
      .catch(() => {
        setIsLoading(false);
        setSubmitMessage("There was an error processing your message.");
        setSuccessfullySubmitted(true);
      });
  }

  const ContactForm = () => {
    return (
      <React.Fragment>
        <TextInput
          onChange={e => setName(e.target.value)}
          value={name}
          label="Name:"
          isLoading={isLoading}
        />
        <TextInput
          onChange={e => setEmail(e.target.value)}
          value={email}
          label="Email:"
          errorMessage={emailError}
          isLoading={isLoading}
        />
        {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
        <MessageLabel disabled={isLoading}>
          Message:
          <MessageInput
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </MessageLabel>
        <FormButton
          style = {FormButtonStyle}
          text="Submit"
          isLoading={isLoading}
          onClick={validateForm}
        />
      </React.Fragment>
    );
  };

  function getFormBody() {
    if (successfullySubmitted) {
      return <p>{submitMessage}</p>;
    } else {
      return ContactForm();
    }
  }

  return (
    <DefaultLayout>
      <h2>Contact</h2>
      {getFormBody()}
    </DefaultLayout>
  );
};

export default Contact;
