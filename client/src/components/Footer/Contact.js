import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DefaultLayout from "../DefaultLayout";
import TextInput from "../shared/TextInput";
import { Button as ButtonPrototype } from "../shared/utilityComponents";

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

const Button = styled(ButtonPrototype)`
  margin-top: 60px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");


  function validateForm() {
    var emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)) {
      return setEmailError("Enter a valid email.")
    }

  }

  function handleSubmit() {
    axios.post("/api/sendContactEmail", null, {
      params: {
        name,
        email,
        message
      }
    });
  }

  return (
    <DefaultLayout>
      <h2>Contact</h2>
      <TextInput
        onChange={e => setName(e.target.value)}
        value={name}
        label="Name:"
      />
      <TextInput
        onChange={e => setEmail(e.target.value)}
        value={email}
        label="Email:"
        errorMesage={emailError}
      />

      <MessageLabel>
        Message:
        <MessageInput
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </MessageLabel>
      <Button isLoading = {true} onClick={handleSubmit}>Submit</Button>
    </DefaultLayout>
  );
};

export default Contact;
