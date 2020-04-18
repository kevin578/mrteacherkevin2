import React from "react";
import styled from "styled-components";

export const FOOTER_HEIGHT = 110;

const Wrapper = styled.section`
  width: 100%;
  height: ${`${FOOTER_HEIGHT}px`};
  background: #345afb;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
`;

const Link = styled.a`
  color: #fff;
  margin: 20px;
  font-weight: 600;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <LinkContainer>
        {/* <Link href = "/about">About</Link> */}
        <Link href = "/contact">Contact</Link>
        <Link target = "_blank" href = "https://www.youtube.com/channel/UCeebzVOg5Iv4hVqKTFdaqUQ">YouTube</Link>
        <Link target = "_blank" href = "http://legacy.mrteacherkevin.rocks">Legacy Site</Link>
      </LinkContainer>
    </Wrapper>
  );
};

export default Footer;
