import React from "react";
import styled from "styled-components";
import OauthButton from "./OauthButton";
import GoogleLogo from "./../../img/googleLogo.png";
import EmailLogo from "./../../img/email.png";

const Title = styled.img`
  display: block;
  padding-top: 150px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 400px;
`;

const Buttons = styled.div`
  display: flex;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

class SplashBody extends React.Component {
  render() {
    return (
      <Buttons>
        <OauthButton logo={EmailLogo} text="Continue with email" />
      </Buttons>
    );
  }
}

export default SplashBody;
