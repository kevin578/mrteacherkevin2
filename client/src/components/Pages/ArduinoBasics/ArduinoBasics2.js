import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Arduino2 extends React.Component {
  render() {
    return (
      <Subject title="Arduino Basics" urlName="arduinobasics2">
        {[
          <Body key="starting" title="Video">
          <Header>Video</Header>
            <iframe
              width="806"
              height="453"
              src="https://www.youtube.com/embed/bIG5SqD336U"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Arduino2;
