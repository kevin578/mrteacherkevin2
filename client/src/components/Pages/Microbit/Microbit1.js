import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Microbit1 extends React.Component {
  render() {
    return (
      <Subject title="micro:bit" urlName="microbit1">
        {[
          <Body key="starting" title="Your first program">
            <Header>Your first program</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/microbit/microbitIntro.mp4" />
            <Header>I have...</Header>
            <Checkbox>lit up some of the micro:bit LEDs.</Checkbox>
            <Checkbox>loaded program onto the micro:bit.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="moreleds" title="More LEDs">
            <Header>More LEDs!</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/microbit/microbit_leds.mp4" />
            <Header>My LED display...</Header>
            <Checkbox>is cycling between at least two different images.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="inputs" title="Inputs">
            <Header>Inputs</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/microbit/microbit_intro.mp4" />
            <Header>My display...</Header>
            <Checkbox>changes based on what button I pressed.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="rockpaperscissors" title="Rock, Paper, Scissors">
            <Header>Rock, Paper, Scissors</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/microbit/rock_paper_scissors.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created a game of rock, paper, scissors on my micro:bit.</Checkbox>
            <Button>Next</Button>
          </Body>,

        ]}
      </Subject>
    );
  }
}

export default Microbit1;
