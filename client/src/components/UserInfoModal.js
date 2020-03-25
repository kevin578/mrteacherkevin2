import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import BirthdaySelect from "./SignIn/BirthdaySelect";
import { customStyles, Header as HeaderPrototype } from "./SignIn/modalStyles";
import TextInput from "./shared/TextInput";
import FormButton from "./shared/FormButton";
import { checkUsername } from "./shared/helperFunctions";

customStyles.overlay.backgroundColor = "#345afb4d";

const Header = styled(HeaderPrototype)`
  margin-bottom: 15px;
`;

const Instructions = styled.p`
  margin-top: 0px;
  margin-bottom: 35px;
`;

const UserInfoModal = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [birthdayError, setBirthdayError] = useState("");

  function handleSumbit() {
    setBirthdayError("");
    setUserNameError("");
    if (!checkUsername(userName).success) {
      return setUserNameError(checkUsername().msg);
    }
    setIsLoading(true);
    const id = props.auth._id;
    axios
      .post("/api/setUsernameAndBirthday", null, {
        params: {
          id,
          userName,
          month,
          year
        }
      })
      .then(res => {
        setIsLoading(false);
        const { success, msg, user } = res.data;
        if (msg == "Username already exists") {
          setUserNameError("Username already exists.");
        } else if (msg == "Enter a valid birthday") {
          setBirthdayError("Please enter a valid birthday.");
        } else if (success == false) {
          setBirthdayError("Something went wrong. Please try again.");
        } else {
          props.updateUser(user);
        }
      });
  }

  return (
    <Modal
      isOpen={props.auth && !props.auth.userName || false}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Header>Welcome to mrteacherkevin!</Header>
      <Instructions>
        We just need a couple more bits of info from you.
      </Instructions>
      <TextInput
        loading={isLoading}
        label="Username:"
        name="username"
        value={userName}
        errorMessage={userNameError}
        onChange={e => setUserName(e.target.value)}
      />
      <BirthdaySelect
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        birthdayError={birthdayError}
      />
      <FormButton text="Submit" isLoading={isLoading} onClick={handleSumbit} />
    </Modal>
  );
};

export default UserInfoModal;
