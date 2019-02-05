import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";
import EmbeddedGist from "../../Subject/EmbeddedGist";

class Arduino1 extends React.Component {
  render() {
    return (
      <Subject title="Arduino" urlName="arduino1">
        {[
          <Body key="servo" title="Servo Motor">
            <Header>Servo</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/servo.mp4"/>
            <Header>I have...</Header>
            <Checkbox>made a Servo move back and forth.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="dcmotor" title="DC Motor">
            <Header>Do something again</Header>
            <Video src = "https://www.youtube.com/embed/zPnPCeU6W7E" videoPlayerType = "iframe"/>
            <Button>Next</Button>
          </Body>,

          <Body key="motordriver" title="Motor Driver">
            <Header>Motor Driver</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/motor_driver.mp4" />
            <Header>I have...</Header>
            <Checkbox>used a motor driver to power a motor</Checkbox>
            <Button>Next</Button>,
          </Body>,

          <Body key="lcdscreen" title="LCD Screen">
            <Header>Do something again</Header>
            <Button>Next</Button>,
          </Body>,

          <Body key="rgbLED" title="RGB LED">
            <Header>Sample Header</Header>
            <Video src = "https://www.youtube.com/embed/w9Z1-c0ee3w" videoPlayerType = "iframe"/>
            <p>Some Text</p>
            <Button>Next</Button>
          </Body>,

          <Body key="neopixels" title="NeoPixels">
            <Header>Sample Header</Header>
            <p>Some Text</p>
            <Button>Next</Button>
          </Body>,

          <Body key = "mp3shield" title = "MP3 Shield">
            <Header>MP3 Shield</Header>
            <EmbeddedGist gist="kevin578/f38f7792d58fa038719ffd25d2fe345c" />
          </Body>

        ]}
      </Subject>
    );
  }
}

export default Arduino1;
