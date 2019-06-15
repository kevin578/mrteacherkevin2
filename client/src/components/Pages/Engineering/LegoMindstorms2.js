import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Button from "../../Subject/Button";

class LegoMindstorms2 extends React.Component {
  render() {
    return (
      <Subject title="Lego Mindstorms" urlName="legomindstorms2">
        {[
          <Body key="lineFollower" title="Line Follower">
            <Header>Line Follower</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/mindstorms/line_follower.mp4" />
            <Header>I have...</Header>
            <Checkbox>made my robot follow a straight line.</Checkbox>
            <Checkbox>made my robot follow a curved line.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="straigh-line" title="Straight Line">
            <Header>Straight Line</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/mindstorms/gyro.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              made my robot go straight using the gyro sensor.
            </Checkbox>
            <Checkbox>
              mae my robot go straight at a different heading than 0
            </Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="my-block" title="My Blocks">
            <Header>My Blocks</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/mindstorms/myBlock.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              created a myBlock.
            </Checkbox>
            <Checkbox>
              created a myBlock with parameters.
            </Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default LegoMindstorms2;
