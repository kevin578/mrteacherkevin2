import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Scratch2 extends React.Component {
  render() {
    return (
      <Subject title="Scratch" urlName="scratch2">
        {[
          <Body key="ifthenelse" title="If then else">
            <Header>If then else</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/second/inthenelse.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              a pet that says one thing when my mouse is not touching it,
            </Checkbox>
            <Checkbox>
              and says another thing when my mouse is touching it.
            </Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="changeXY" title="Under Control">
            <Header>Under Control</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/second/movexy.mp4" />
            <Header>I can...</Header>
            <Checkbox>
              use the arrow keys to change the X and Y position of my
              characters.
            </Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="moveBlock" title="Step Up">
          <Header>Step Up</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/second/moveSteps.mp4" />
            <Header>I can...</Header>
            <Checkbox>use the move block to make my sprite move.</Checkbox>
            <Checkbox>
              use the rotation blocks to change the direction of the movemnt
            </Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="variable" title="Variables">
            <Header>Variables</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/second/variables.mp4"/>
            <Header>I have...</Header>
            <Checkbox>used a variable in a meaningful way.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="events" title="The Main Event">
          <Header>The Main Event</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/second/broadcast.mp4" />
            <Header>I have...</Header>
            <Checkbox>broadcasted an event and used a listener.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="question" title="Question Time">
            <Header>I have...</Header>
            <Checkbox>used the ask block.</Checkbox>
            <Checkbox>used the answer block in a meaningful way.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="clones" title="Attack of the Clones">
            <Header>I have...</Header>
            <Checkbox>used a clone</Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Scratch2;
