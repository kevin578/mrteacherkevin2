import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DefaultLayout from "../DefaultLayout";
import { Header } from "./modalStyles";
import FormButton from "../shared/FormButton";
import TextInput from "../shared/TextInput";

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function updatePassword() {
    setNewPasswordError("");
    setConfirmPasswordError("");
    if (!newPassword) {
      return setNewPasswordError("Password cannot be blank.");
    } else if (newPassword != confirmPassword) {
      return setConfirmPasswordError("Passwords do not match.");
    } else if (confirmPassword.length <= 6) {
      return setConfirmPasswordError("Password must be at least 6 characters.");
    }
    const url = window.location.href.split("/");
    const jwt = url[url.length - 1];
    setIsLoading(true);
    axios
      .post("/api/resetPassword", {
        password: newPassword,
        jwt
      })
      .then(res => {
        setIsLoading(false);
        if (res.data.message == "Link has expired") {
          setShowErrorMessage(true);
        } else {
          setShowSuccessScreen(true);
        }
      });
  }

  return (
    <DefaultLayout>
      <Header>Reset Password</Header>
      {!showSuccessScreen && (
        <React.Fragment>
          <TextInput
            loading={isLoading}
            label="New Password:"
            name="newPassword"
            value={newPassword}
            errorMessage={newPasswordError}
            errorMarginLeft="150px"
            labelWidth="140px"
            type="password"
            onChange={e => setNewPassword(e.target.value)}
          />
          <TextInput
            loading={isLoading}
            label="Confirm Password:"
            name="confirmPassword"
            value={confirmPassword}
            errorMessage={confirmPasswordError}
            labelWidth="140px"
            errorMarginLeft="150px"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {showErrorMessage && <ErrorMessage>Link has expired.</ErrorMessage>}
          <FormButton
            text="Update Password"
            isLoading={isLoading}
            onClick={updatePassword}
          />
        </React.Fragment>
      )}
      {showSuccessScreen && <p>Password successfully updated</p>}
    </DefaultLayout>
  );
};

export default ResetPassword;
