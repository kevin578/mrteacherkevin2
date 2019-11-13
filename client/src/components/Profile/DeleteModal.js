import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import TextInput from "../shared/TextInput";
import { modalStyles as modalStylesTemplate } from "../shared/utilityComponents";

const DeleteModal = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");

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
    </Modal>
  );
};

export default DeleteModal;
