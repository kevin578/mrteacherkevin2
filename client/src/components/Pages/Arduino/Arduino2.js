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
      <Subject title="Arduino" urlName="arduino2">
        {[
          <Body key="pushbutton" title="Push Button">
            <Header>Push Button</Header>
            <Video src = "https://www.youtube.com/embed/I-2j6rP-8nQ" videoPlayerType = "iframe"/>
            <Button>Next</Button>
          </Body>,

          <Body key="potentiometer" title="Potentiometer">
            <Header>Potentiometer</Header>
            <Video src = "https://www.youtube.com/embed/hL3aP_godSA" videoPlayerType = "iframe"/>
            <Button>Next</Button>
          </Body>,

          <Body key="photoresister" title="Photoresister">
            <Header>Photoresister</Header>
            <Video src = "https://www.youtube.com/embed/PsBNSm-NdcY" videoPlayerType = "iframe"/>
            <Button>Next</Button>
          </Body>,

          <Body key="tempsensor" title="Temperature Sensor">
            <Header>Tempererature Sensor</Header>
            <Button>Next</Button>
          </Body>,

          <Body key="forcesensor" title="Force Sensor">
            <Header>Force Sensor</Header>
            <Button>Next</Button>
          </Body>,

          <Body key="ultrasonic" title="Ultrasonic Sensor">
            <Header>Ultrasonic Sensor</Header>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Arduino2;
