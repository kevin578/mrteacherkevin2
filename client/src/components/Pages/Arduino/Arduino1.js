import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import SharingWidget from "../../Subject/SharingWidget";
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
            <Header>Do something again</Header>
            <Button>Next</Button>
          </Body>,

          <Body key="dcmotor" title="DC Motor">
            <Header>Do something again</Header>
            <Video src = "https://www.youtube.com/embed/zPnPCeU6W7E" videoPlayerType = "iframe"/>
            <Button>Next</Button>
          </Body>,

          <Body key="motordriver" title="Motor Driver">
            <Header>Do something again</Header>
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
