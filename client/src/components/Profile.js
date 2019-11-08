import React from "react";
import { Button as ButtonPrototype } from "./shared/utilityComponents";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "./Header";

const ProfileContainer = styled.div`
  margin-top: 85px;
  margin-left: 50px;
`;

const Button = styled(ButtonPrototype)`
  margin-top: 40px;
  height: 30px;
  line-height: 30px;  
  width: 100px;
  font-weight: 400;
  font-size: 12px;
  background: #dc3545;
`

const Profile = props => {
  
  function getEmail() {
    if (props.auth) {
      return props.auth.email;
    }
    else {
      return "";
    }
  }

  return (
    <React.Fragment>
      <Header />
      <ProfileContainer>
        <h2>Profile</h2>
        <p><b>email:</b> { getEmail() }</p>
        <Button>Delete Account</Button>
      </ProfileContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state)=> ({
  auth: state.auth
}); 

export default connect(mapStateToProps)(Profile)

