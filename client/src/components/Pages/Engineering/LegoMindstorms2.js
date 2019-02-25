import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class LegoMindstorms2 extends React.Component {
  render() {
    return (
      <Subject title="Lego Mindstorms" urlName="legomindstorms2">
        {[
          <Body key="lineFollower" title="Line Follower">
            <Header>Line Follower</Header>
            <Video src = "https://www.youtube.com/watch?v=ye3MhVA9Rhs" iframe/>
            <Header>I have...</Header>
            <Checkbox>made my robot follow line.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="straigh-line" title="Straight Line">
            <Header>Straight Line</Header>
            <Header>I have...</Header>
            <Checkbox>made my robot go straight.</Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default LegoMindstorms2;
