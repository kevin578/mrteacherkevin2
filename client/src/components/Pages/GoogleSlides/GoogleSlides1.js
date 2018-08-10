import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class GoogleSlides1 extends React.Component {
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

export default GoogleSlides1;