import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Soundtrap1 extends React.Component {
  render() {
    return (
      <Subject title="Soundtrap" urlName="soundtrap1">
        {[
          <Body key="loops" title="Loops">
            <Header>Loops</Header>
            <Video
              src="https://www.youtube.com/embed/V7Wnep0vJMc"
              videoPlayerType="iframe"
            />
            <Header>I have...</Header>
            <Checkbox>used loops in my song</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="instruments" title="Instruments">
            <Header>Instruments</Header>
            <Video
              src="https://www.youtube.com/embed/NPuuJGnSRIA"
              videoPlayerType="iframe"
            />
            <Header>I have...</Header>
            <Checkbox>used an instrument.</Checkbox>
            <Checkbox>used the pattern maker</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="effects" title="Effects">
            <Header>Effects</Header>
            <Video
              src="https://www.youtube.com/embed/HIX4-XO2E9I"
              videoPlayerType="iframe"
            />
            <Header>I have...</Header>
            <Checkbox>tried at least 2 differnt effects.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="voice" title="Voice">
            <Header>Voice</Header>
            <Video
              src="https://www.youtube.com/embed/p8odgVdi73E"
              videoPlayerType="iframe"
            />
            <Header>I have...</Header>
            <Checkbox>added a voice track to my song.</Checkbox>
            <Checkbox>added an effect to my voice.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>Create a song that uses...</Header>
            <Checkbox>at least 3 tracks.</Checkbox>
            <Checkbox>at least 1 orginal instrument track.</Checkbox>
            <Checkbox>at least 1 effect.</Checkbox>
            <Checkbox>at least 1 voice track. </Checkbox>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Soundtrap1;
