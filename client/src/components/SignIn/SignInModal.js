import React from "react";
import Modal from "react-modal";
import { TextField } from "../Subject/Quiz";
import GoogleButton from "./GoogleButton";
import { customStyles, Header, SignupButton, CloseButton, Or_Text } from "./modalStyles";


const SignInModal = props => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Header>Sign in</Header>
        <TextField placeholder="Username" name="name-input" type="text" />
        <TextField
          placeholder="Password"
          name="password-input"
          type="password"
        />

        <SignupButton>Sign in with email</SignupButton>
        <Or_Text>or</Or_Text>
        <GoogleButton text = "Sign in with Google"/>
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignInModal;
