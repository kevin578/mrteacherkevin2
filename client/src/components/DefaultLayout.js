import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer, { FOOTER_HEIGHT } from "./Footer/Footer";

const Page = styled.div`
  position: relative;
  min-height: 110vh;
`;

const Body = styled.div`
  margin-top: 85px;
  margin-left: 50px;
  padding-bottom: ${`${FOOTER_HEIGHT + 50}px`};

`;

const DefaultLayout = props => {
  return (
    <Page>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </Page>
  );
};

export default DefaultLayout;