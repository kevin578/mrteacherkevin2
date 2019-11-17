import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Button } from "../shared/utilityComponents";
import { modalStyles as modalStylesTemplate } from "../shared/utilityComponents";

const DeleteButton = styled(Button)`

`;

const modalStyles = {
  content: {
    ...modalStylesTemplate.content,
    top: "30%",
    width: 500,
  }
};

const DeleteModal = props => {
  return (
    <Modal isOpen={props.isOpen} style={modalStyles}>
      <h2>Delete Profile</h2>
      <p>Please contact</p>
    </Modal>
  );
};

export default DeleteModal;
