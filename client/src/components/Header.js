import React from "react";
import styled from "styled-components";
import image from "./../img/logo2.png";
import { connect } from "react-redux";
import zeroFill from "zero-fill";
import PropTypes from "prop-types";
import googleButton from "../img/btn_google_light.svg";

export const headerHeight = 60;
const imgHeight = headerHeight - 20;

const Wrapper = styled.section`
  top: 0px;
  background: blue;
  height: ${headerHeight}px;
  width: 100%;
  background: #345afb;
  display: flex;
  position: fixed;
  overflow: hidden;
  z-index: 99;
`;

const Logo = styled.img`
  margin-top: ${(headerHeight - imgHeight) / 2}px;
  height: ${imgHeight}px;
  margin-left: 32px;
  cursor: pointer;
`;

const HeaderLinks = styled.div`
  margin-left: 50%;
  display: flex;
`;

const HeaderLink = styled.a`
  margin-right: 40px;
  display: block;
  margin-top: 10px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

class Header extends React.Component {

  getHeaderContent = () => {
    if (this.props.auth == null) {
      return;
    } else if (this.props.auth) {
      return (
        <HeaderLinks>
          <HeaderLink>{zeroFill(5)(this.props.score)}</HeaderLink>
          <HeaderLink>Profile</HeaderLink>
          <HeaderLink href="/api/logout">Logout</HeaderLink>
        </HeaderLinks>
      );
    } else {
      return (
        <HeaderLinks>
          <HeaderLink href="/auth/google"><img src = {googleButton}/></HeaderLink>
        </HeaderLinks>
      );
    }
  };

  goHome = () => {
    window.location = "/";
  };

  render() {
    return (
      <Wrapper>
        <Logo src={image} onClick={this.goHome} />
        {this.getHeaderContent()}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    score: state.score
  };
}

export default connect(mapStateToProps)(Header);
