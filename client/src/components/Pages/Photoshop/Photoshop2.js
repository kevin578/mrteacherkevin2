import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Photoshop2 extends React.Component {
  render() {
    return (
      <Subject title="Photoshop" urlName="photoshop2">
        {[
          <Body key="starting" title="Setup">
            <Header>Setup</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/button_setup.mp4" />
            <Header>I have...</Header>
            <Checkbox>made a 70mm circle.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="clippingmask" title="Clipping Masks">
            <Header>Clipping Mask</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/clipping+mask.mp4" />
            <Header>I have...</Header>
            <Checkbox>used clipping mask.</Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Photoshop2;