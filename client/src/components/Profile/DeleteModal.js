import React, { useState } from "react";
import styled from "styled-components";
import { Button as ButtonPrototype } from "../shared/utilityComponents";
import Modal from "react-modal";
import TextInput from "../shared/TextInput";
import {
  modalStyles as modalStylesTemplate,
  CloseButton
} from "../shared/utilityComponents";

const Button = styled(ButtonPrototype)`
  margin-top: 45px;
`;

const DeleteModal = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const modalStyles = {
    content: {
      ...modalStylesTemplate.content,
      width: 500
    }
  };

  return (
    <Modal isOpen={props.isOpen} style={modalStyles}>
      <h2>Change Password</h2>
      <TextInput
        loading={isLoading}
        label="Current Password:"
        name="currentPassword"
        type="password"
        labelWidth="175px"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <TextInput
        loading={isLoading}
        label="New Password:"
        name="currentPassword"
        type="password"
        labelWidth="175px"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <TextInput
        loading={isLoading}
        label="Confirm New Password:"
        name="currentPassword"
        type="password"
        labelWidth="175px"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <Button>Confirm</Button>
      <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
    </Modal>
  );
};

export default DeleteModal;
