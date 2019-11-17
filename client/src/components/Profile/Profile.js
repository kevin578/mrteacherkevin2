import React, {useState} from "react";
import { Button as ButtonPrototype } from "../shared/utilityComponents";
import { connect } from "react-redux";
import styled from "styled-components";
import ChangePasswordModal from "./ChangePassword";
import DeleteModal from "./DeleteModal";
import Header from "../Header";

const ProfileContainer = styled.div`
  margin-top: 85px;
  margin-left: 50px;
`;

const Button = styled(ButtonPrototype)`
  height: 30px;
  line-height: 30px;
  width: 100px;
  font-weight: 400;
  font-size: 12px;
`;

const DeleteAccountButton = styled(Button)`
  margin-top: 20px;
  background: none;
  color: #0000EE;
`;

const ChangePasswordButton = styled(Button)`
  margin-top: 40px;
  background: #6c757d;
  width: 120px;
`;

const Profile = props => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function toggleShowPasswordModal() {
    setShowChangePasswordModal(!showChangePasswordModal);
  }

  function toggleDeleteModal() {
    setShowDeleteModal(!showDeleteModal);
  }

  function getEmail() {
    if (props.auth) {
      return props.auth.email;
    } else {
      return "";
    }
  }

  return (
    <React.Fragment>
      <Header />
      <ProfileContainer>
        <h2>Profile</h2>
        <p>
          <b>email:</b> {getEmail()}
        </p>
          <ChangePasswordButton onClick = {toggleShowPasswordModal}>Change Password</ChangePasswordButton>
          <ChangePasswordModal 
            isOpen = {showChangePasswordModal}
            toggleShowModal = {toggleShowPasswordModal}
            email = {getEmail()}
          />
          {/* <DeleteAccountButton>Delete Account</DeleteAccountButton>
          <DeleteModal
            isOpen = {false}
          /> */}
      </ProfileContainer>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);
