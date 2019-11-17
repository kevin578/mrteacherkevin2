import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button as ButtonPrototype } from "../shared/utilityComponents";
import Modal from "react-modal";
import TextInput from "../shared/TextInput";
import {
  modalStyles as modalStylesTemplate,
  CloseButton
} from "../shared/utilityComponents";
import { ClipLoader as HalgeniumLoader } from "halogenium";

const Button = styled(ButtonPrototype)`
`;

const SuccessMessage = styled.p`
  color: #28a745;
`;

const ButtonLoadingContainer = styled.div`
  margin-top: 45px;
  display: flex;
`;

const Loader = styled(HalgeniumLoader)`
  margin-left: 25px;
`;



const DeleteModal = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const modalStyles = {
    content: {
      ...modalStylesTemplate.content,
      width: 500,
      top: "40%"
    }
  };

  function handleClose() {
    props.toggleShowModal();
    clearAll();
  } 

  function clearAll() {
    clearErrors();
    clearInputs();
    setShowSuccess(false);
  }

  function clearErrors() {
    setCurrentPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");
  }

  function clearInputs() {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  function checkForBlanks() {
    const errorMessage = "Field cannont be blank.";
    if (currentPassword === "") {
      setCurrentPasswordError(errorMessage);
      return true;
    }
    if (!newPassword) {
      setNewPasswordError(errorMessage);
      return true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError(errorMessage);
      return true;
    }
  }

  function localErrorCheck() {
    if (checkForBlanks()) {
      return true;
    }
    if (newPassword != confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return true;
    }
    if (newPassword.length < 6) {
      setConfirmPasswordError("Password must be at least 6 characters.");
      return true;
    }
    return false;
  }

  function handleConfirm() {
    clearErrors();
    if (localErrorCheck()) {
      return true;
    }
    setIsLoading(true);
    axios
      .post("/api/change-password", null, {
        params: {
          email: props.email,
          currentPassword,
          newPassword
        }
      })
      .then(res => {
        handleResponse(res.data);
        setIsLoading(false);
      });
  }

  function handleResponse(res) {
    if (res.message == "Incorrect password") {
      setCurrentPasswordError("Password is incorrect.");
    } else {
      clearInputs();
      setShowSuccess(true);
    }
  }

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
        errorMarginLeft="0px"
        errorMessage={currentPasswordError}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <TextInput
        loading={isLoading}
        label="New Password:"
        name="newPassword"
        type="password"
        labelWidth="175px"
        value={newPassword}
        errorMarginLeft="0px"
        errorMessage={newPasswordError}
        onChange={e => setNewPassword(e.target.value)}
      />
      <TextInput
        loading={isLoading}
        label="Confirm New Password:"
        name="confirmPassword"
        type="password"
        labelWidth="175px"
        value={confirmPassword}
        errorMarginLeft="0px"
        errorMessage={confirmPasswordError}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      {showSuccess && (
        <SuccessMessage>Password was successfully changed.</SuccessMessage>
      )}
      <ButtonLoadingContainer>
        <Button onClick={handleConfirm}>Confirm</Button>
        {isLoading && <Loader color="blue" />}
      </ButtonLoadingContainer>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
    </Modal>
  );
};

export default DeleteModal;
