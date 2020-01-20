import React, { useState } from "react";
import axios from "axios";
import DefaultLayout from "../DefaultLayout";
import { Header, SignupButton } from "./modalStyles";
import TextInput from "../shared/TextInput";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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
    const id = url[url.length - 2];
    axios.post("/api/resetPassword", {
      password: newPassword,
      jwt,
      id
    })
    .then((res)=> {
        console.log(res.data)
    });
  }

  return (
    <DefaultLayout>
      <Header>Reset Password</Header>
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
      <SignupButton onClick={updatePassword}>Update Password</SignupButton>
    </DefaultLayout>
  );
};

export default ResetPassword;
