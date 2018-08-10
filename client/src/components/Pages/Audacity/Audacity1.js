import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Audacity1 extends React.Component {
  render() {
    return (
      <Subject title="Audacity" urlName="audacity1">
        {[
          <Body key="video" title="Tutorial Video">
                <Header>Tutorial Video:</Header>
                <Video src = "https://www.youtube.com/embed/mtVM2_tSCBQ"/ >
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Audacity1;

