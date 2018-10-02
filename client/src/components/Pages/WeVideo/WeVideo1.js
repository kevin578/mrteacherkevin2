import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class WeVideo1 extends React.Component {
  render() {
    return (
      <Subject title="WeVideo" urlName="wevideo1">
        {[
          <Body key="gettingStarted" title="Getting Started">
            <Header>Getting Started</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoIntro.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created a new WeVideo account.</Checkbox>
            <Checkbox>created a new project folder.</Checkbox>
            <Checkbox>created a new video inside that project.</Checkbox>
            <Checkbox>changed the name of my video.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="addMedia" title="Adding Media">
            <Header>Adding Media</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/addMedia.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added my media into the project folder.</Checkbox>
            <Checkbox>added into the actual movie timeline.</Checkbox>
            <Checkbox>clipped it down so it everything is nice and snappy.</Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default WeVideo1;