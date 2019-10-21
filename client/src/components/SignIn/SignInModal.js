import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { TextField } from "../Subject/Quiz";
import GoogleButton from "./GoogleButton";
import { customStyles, Header, SignupButton, CloseButton, Or_Text } from "./modalStyles";
import TextInput from "../shared/TextInput";
import { ClipLoader as HalgeniumLoader } from "halogenium";

const Loader = styled(HalgeniumLoader)`
  position: absolute;
  left: 250px;
`;

const SignInModal = props => {
  const [isLoading, setIsLoading] = useState(false);

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
        {isLoading && <Loader color="blue" />}
        <Or_Text>or</Or_Text>
        <GoogleButton text = "Sign in with Google"/>
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default SignInModal;
