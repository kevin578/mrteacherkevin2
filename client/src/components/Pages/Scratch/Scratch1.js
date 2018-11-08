import React from "react";
import styled from "styled-components";
import Subject from "./../../Subject/Subject";
import { Body, Header, Image, Video } from "../../Subject/SubjectStyles";
import ProjectSubmission from "../../Subject/ProjectSubmission";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";
import whenGreenFlagClicked from "../../../img/scratch_blocks/whenGreenFlagClicked.png";
import sayFor2Sec from "../../../img/scratch_blocks/SayFor2Sec.png";

const ScratchBlocks = styled.img`
  margin-right: 15px;
`;

class Scratch1 extends React.Component {
  render() {
    return (
      <Subject title="Scratch" urlName="scratch1">
        {[
          <Body key="starting" title="Let's get started">
            <Header>Let's get started</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/scratchInto.mp4"/>
            <Header>I have...</Header>
            <Checkbox>named my file.</Checkbox>
            <Checkbox>deleted the cat.</Checkbox>
            <Checkbox>added a new sprite.</Checkbox>
            <Checkbox>changed the background.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="again" title="Chitter Chatter">
            <Header>Make your character talk</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/talking.mp4"/>
            <Header>I have...</Header>
            <Checkbox>made my character say something.</Checkbox>
            <Checkbox>that something is not "Hello".</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="movement" title="Body Movin'">
            <Header>Body Movin'</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/movking.mp4"/>
            <Header>I have...</Header>
            <Checkbox>my sprite moving around the screen.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="draw" title="Let's Draw">
            <Header>Let's Draw</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/drawing.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created a sprite or costume in bitmap.</Checkbox>
            <Checkbox>created a sprite or costume in vector.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="sound" title="The Sound of Music">
          <Header>The Sound of Music</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/sounds.mp4"/>
          <Header>I have...</Header>
          <Checkbox>added sound to my project.</Checkbox>
          <Button>Next</Button>
          </Body>,
          <Body key="animation" title="Animation">
            <Header>Animation</Header>
            <Header>I have...</Header>
            <Checkbox>animated a sprite.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="visualEffects" title="Graphic Effects">
            <Header>Graphic Effets</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/scratch/graphicEffects.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added a graphic effect.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="changeBackgrounds" title="Background Check" />,
          <Body key="share" title="Making a Scene!">
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Scratch1;
