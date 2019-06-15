import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header } from "../../Subject/SubjectStyles";
import Button from "../../Subject/Button";

class GoogleSlides2 extends React.Component {
  render() {
    return (
      <Subject title="Google Slides" urlName="sampleURL">
        {[
          <Body key="starting" title="Start something">
            <Header>Sample Header</Header>
            <p>Some Text</p>
            <Button>Next</Button>
          </Body>,

          <Body key="again" title="Do somthing again">
            <Header>Do something again</Header>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default GoogleSlides2;