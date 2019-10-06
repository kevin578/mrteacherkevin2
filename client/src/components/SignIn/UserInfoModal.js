import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { TextField } from "../Subject/Quiz";
import { months, years } from "./month_year";
import { Button } from "../shared/utilityComponents";
import GoogleButton from "./GoogleButton";

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

const BirthdaySelect = styled.select`
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: none;
  border-bottom: 1px solid #eee;
  margin-left: 20px;
  background: url(https://png.pngtree.com/svg/20161117/b360928f8b.svg) 96% / 15%
    no-repeat #fff;
`;

const BirthdayOption = styled.option``;

const SignupButton = styled(Button)`
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
  width: 200px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`;

const BirthdayLabel = styled.label``;

const BirthdayContainer = styled.div`
  margin-bottom: 20px;
`;

const Or_Text = styled.p`
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UserInfoModal = props => {
  function setOptions(options) {
    return options.map((optionValue, i) => (
      <BirthdayOption key={`${optionValue}${i}`}>{optionValue}</BirthdayOption>
    ));
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Header>Sign up</Header>
        <TextField placeholder="Username" name="name-input" type="text" />
        <TextField
          placeholder="Password"
          name="password-input"
          type="password"
        />

        <BirthdayContainer>
          <BirthdayLabel for="birth-month">Birthday:</BirthdayLabel>
          <BirthdaySelect name="birth-month">
            {setOptions(months)}
          </BirthdaySelect>
          <BirthdaySelect>{setOptions(years())}</BirthdaySelect>
        </BirthdayContainer>

        <TextField placeholder="Email" />

        <SignupButton>Sign up with email</SignupButton>
        <Or_Text>or</Or_Text>
        <GoogleButton />
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default UserInfoModal;
