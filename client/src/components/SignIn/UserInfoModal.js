import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import DatePicker from "react-date-picker";
import { TextField } from "../Subject/Quiz";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 100
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    width: 500,
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

const Header = styled.h1`
  font-weight: 400;
  margin-bottom: 40px;
`;

const CloseButton = styled.button`
  border:none;
  background: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`;

const UserInfoModal = (props)=>{
  
    return (
      <div>
        <Modal
          isOpen={props.isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Header>Sign up</Header>
          <TextField placeholder = "Username" name="name-input" type="text" />
          <TextField placeholder = "Password" name="password-input" type="password" />
          <CloseButton onClick = {props.toggleModal}>&times;</CloseButton>
        </Modal>
      </div>
    );
  };

  export default UserInfoModal;
