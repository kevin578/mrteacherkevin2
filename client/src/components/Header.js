import React from "react";
import styled from "styled-components";
import image from "./../img/logo2.png";
import { connect } from "react-redux";
import media from "./Main/mediaQueries";
import zeroFill from "zero-fill";
import PropTypes from "prop-types";
import googleButton from "../img/btn_google_light.svg";
import ReactSVG from "react-svg";
import hamburger from "../img/baseline-menu-24px.svg";

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
  ${media.bigPhone`overflow: visible;`};
  z-index: 99;
`;

const Logo = styled.img`
  margin-top: ${(headerHeight - imgHeight) / 2}px;
  height: ${imgHeight}px;
  margin-left: 32px;
  cursor: pointer;
  ${media.bigPhone`  margin-left: 10px;`}
  ${media.smallPhone`height: 35px;`}
  ${media.smallPhone`margin-top: 12px;`}
`;

const Hamburger = styled(ReactSVG)`
  fill: white;
  margin-top: 7px;
  margin-left: 30px;
  display: none;
  ${media.bigPhone`display: block;`}
  ${media.smallPhone`margin-left: 10px;`}

`;

const HeaderLinks = styled.div`
  margin-left: 50%;
  display: flex;

  ${media.smallLaptop`margin-left: 40%;`};
  ${media.bigPhone`
  display: ${props=> props.show ? "block" : "none"};
  position: absolute;
  color: black;
  background: green;
  width: 400px;
  top: 50px;
  height: 400px;
  margin-left: 0px;
  `};
`;

const HeaderLink = styled.a`
  margin-right: 40px;
  display: block;
  margin-top: ${headerHeight / 2}px;
  transform: translateY(-20%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

const GoogleButtonLink = styled(HeaderLink)`
  margin-top: 9px;
  transform: translateY(0%);
`;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHamburgerMenu: true
    };

  }

  getHeaderContent = () => {
    if (this.props.auth == null) {
      return;
    } else if (this.props.auth) {
      return (
        <HeaderLinks show = {this.state.showHamburgerMenu}>
          <HeaderLink>{zeroFill(5)(this.props.score)}</HeaderLink>
          <HeaderLink>Profile</HeaderLink>
          <HeaderLink href="/api/logout">Logout</HeaderLink>
        </HeaderLinks>
      );
    } else {
      return (
        <HeaderLinks>
          <GoogleButtonLink>
            <a href="/auth/google">
              <img src={googleButton} />
            </a>
          </GoogleButtonLink>
        </HeaderLinks>
      );
    }
  };

  goHome = () => {
    window.location = "/";
  };

  hamburgerClicked = () => {
    
  }

  render() {
    return (
      <Wrapper>
        <Hamburger src={hamburger} onClick = {this.hamburgerClicked}/>
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
