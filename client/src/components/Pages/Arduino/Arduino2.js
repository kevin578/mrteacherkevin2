import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Button from "../../Subject/Button";

class Arduino2 extends React.Component {
  render() {
    return (
      <Subject title="Arduino" urlName="arduino2">
        {[
          <Body key="pushbutton" title="Push Button">
            <Header>Push Button</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/pushbutton.mp4" />
            <Button>Next</Button>
          </Body>,

          <Body key="potentiometer" title="Potentiometer">
            <Header>Potentiometer</Header>
            <Video
              src="https://www.youtube.com/embed/hL3aP_godSA"
              videoPlayerType="iframe"
            />
            <Button>Next</Button>
          </Body>,

          <Body key="photoresister" title="Photoresister">
            <Header>Photoresister</Header>
            <Video
              src="https://www.youtube.com/embed/PsBNSm-NdcY"
              videoPlayerType="iframe"
            />
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
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/ultrasonic.mp4" />
            <a
              href="https://github.com/ErickSimoes/Ultrasonic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 30, display: "block" }}
            >
              Link to the library
            </a>
            <p>Your wiring should look like this:</p>
            <Image src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/Screen+Shot+2018-12-10+at+10.27.34+AM.png" />
            <Button>Next</Button>
          </Body>,
          <Body key="infared" title="Infared Remote Control">
            <Header>Infared Remote Control</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/ir-remote.mp4" />
            <a
              href="https://github.com/cyborg5/IRLib2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 30, display: "block" }}
            >
              Link to the library
            </a>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Arduino2;
