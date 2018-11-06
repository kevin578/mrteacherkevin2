import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Arduino2 extends React.Component {
  render() {
    return (
      <Subject title="Arduino Basics" urlName="arduinobasics2">
        {[
          <Body key="circuits" title="It's Electric">
            <Header>It's Electric</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/flashOnflashOff/arduinoLightIntro.mp4"/>
            <Header>In Tinkercad, do the following in order:</Header>
            <Checkbox>1. Light up a lightbulb.</Checkbox>
            <Checkbox>2. Light up a lightbulb with a breadboard.</Checkbox>
            <Checkbox>3. Light up an LED with an Arduino.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="ArduinoLED" title="The Real World">
            <Header>Gather the follow supplies:</Header>
            <Checkbox>Arduino</Checkbox>
            <Checkbox>Breadboard</Checkbox>
            <Checkbox>LED</Checkbox>
            <Checkbox>330 ohm resister</Checkbox>
            <Checkbox>jumper wires</Checkbox>
            <Checkbox>wire to connect Arduino to computer</Checkbox>
            <Header>How to find Anode and Cathode</Header>
            <Image 
            src = "http://rctrains.co.uk/Files/Image/Photos/led.gif" 
            width = "400px"
            />
            <Header>When you've done that...</Header>
            <Checkbox>light that LED up</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="flashTinker" title="Light this Candle">
            <Header>Light this Candle</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/flashOnflashOff/flashOnFlashOff.mp4" />
            <Header>In Tinkercad...</Header>
            <Checkbox>make an led blink on and off</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="flashReal" title="Flash On Flash Off">
            <Header>Flash On Flash Off</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/flashOnflashOff/realWorld.mp4" />
            <Header>In real life...</Header>
            <Checkbox>make an led blink on and off</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="sequenceReal" title="Sequence">
          <Header>Sequence</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/flashOnflashOff/sequence.mp4"/>
            <Header>In real life...</Header>
            <Checkbox>make 3 LEDs blink in a sequence.</Checkbox>
            <Button>Next</Button>,
          </Body>,

          <Body key="veryVariable" title="Very Variable...The Sequel">
            <Header>Finally...</Header>
            <Checkbox>
              use a variable to control the length of all the delays.
            </Checkbox>
            <Button>Next</Button>,
          </Body>,

          <Body key="project" title="Project" />
        ]}
      </Subject>
    );
  }
}

export default Arduino2;
