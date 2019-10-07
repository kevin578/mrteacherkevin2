import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { TextField } from "../Subject/Quiz";
import { months, years } from "./month_year";
import GoogleButton from "./GoogleButton";
import { customStyles, Header, SignupButton, CloseButton, Or_Text } from "./modalStyles";



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

const BirthdayLabel = styled.label``;

const BirthdayContainer = styled.div`
  margin-bottom: 20px;
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
        <GoogleButton text = "Sign up with Google"/>
        <CloseButton onClick={props.toggleModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default UserInfoModal;
