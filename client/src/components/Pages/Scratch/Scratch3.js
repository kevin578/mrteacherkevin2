import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Scratch3 extends React.Component {
  render() {
    return (
      <Subject title="Scratch" urlName="scratch3">
        {[
          <Body key="gravity" title="Gravity">
            <Header>Gravity</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/third/gravity.mp4"/>
            <Header>I have...</Header>
            <Checkbox>made a realistic gravity effect.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="platform" title="Platform Game">
            <Header>Platform Game</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/third/platform.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created an object my sprite can land on.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="scrolling" title="Scrolling">
            <Header>Scrolling</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/third/scrolling.mp4"/>
            <Header>I have...</Header>
            <Checkbox>made a scrolling effect.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="launch" title="Launching">
            <Header>Launching</Header>
            <p>Coming soon...</p>
          </Body>,

          <Body key="inventory" title="Inventory">
            <Header>Inventory</Header>
            <p>Coming soon...</p>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Scratch3;
