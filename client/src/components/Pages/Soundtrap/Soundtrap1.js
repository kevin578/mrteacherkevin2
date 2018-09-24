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
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Soundtrap%2Floops.mp4?alt=media&token=37eff083-2318-4713-ac94-dc9d1ef773d4" />
            <Header>I have...</Header>
            <Checkbox>used loops in my song</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="instruments" title="Instruments">
            <Header>Instruments</Header>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Soundtrap%2Finstruments.mp4?alt=media&token=be8122bc-d762-4929-a28f-a967215d5211" />
            <Header>I have...</Header>
            <Checkbox>used an instrument.</Checkbox>
            <Checkbox>used the pattern maker</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="effects" title="Effects">
            <Header>Effects</Header>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Soundtrap%2Feffects.mp4?alt=media&token=5ec068cc-e2e8-45dc-ac7d-3562d49aaf0a" />
            <Header>I have...</Header>
            <Checkbox>tried at least 2 differnt effects.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="voice" title="Voice">
            <Header>Voice</Header>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Soundtrap%2Fvoice.mp4?alt=media&token=249bc3ac-67ab-4446-b940-f2083fb7b495" />
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
