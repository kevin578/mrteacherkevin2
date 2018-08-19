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
            <p>
              Let's paint a nice scene with Scratch. Create a new project and
              use the scissors to get rid of the cat. Then select a new sprite
              and background.
            </p>
            <Header>Before you go on, make sure you have...</Header>
            <Checkbox>named your file.</Checkbox>
            <Checkbox>deleted the cat.</Checkbox>
            <Checkbox>added a new sprite.</Checkbox>
            <Checkbox>changed the background.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="again" title="Chitter Chatter">
            <Header>Make your character talk</Header>
            <p>
              Use the following blocks to make your character say something:
            </p>
            <ScratchBlocks src={whenGreenFlagClicked} alt="green flag" />
            <ScratchBlocks src={sayFor2Sec} alt="say for 2 seconds" />
            <Header>I have...</Header>
            <Checkbox>made my character say something.</Checkbox>
            <Checkbox>that something is not "Hello".</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key="movement" title="Body Movin'" />,
          <Body key="sound" title="The Sound of Music" />,
          <Body key="draw" title="Let's Draw" />,
          <Body key="wait" title="Wait!" />,
          <Body key="animation" title="Animation" />,
          <Body key="visual effects" title="Graphic Effects" />,
          <Body key="review1" title="Review" />,

          <Body key="advanceMovement" title="Advanced Movement">
            <Header>Advanced Movement</Header>
            Use the glide, move, and wait blocks to make your character move
            around the screen.
            <Header>Do the following in this order:</Header>
            <Checkbox>1. Start in the middle and wait one second.</Checkbox>
            <Checkbox>
              2. Go to one of the corners and then glide in a square.
            </Checkbox>
            <Checkbox>3. Go to the middle and wait 1 second.</Checkbox>
            <Checkbox>4. Glide in a triangle.</Checkbox>
            <Checkbox>5. Finish in the middle.</Checkbox>
            <Header>Like this:</Header>
            <Image src="https://res.cloudinary.com/ddrd9osrk/image/upload/v1533821292/scratchAdvancedMovement.gif" />
            <Button>Next</Button>
          </Body>,
          <Body key="loops" title="Loopy" />,
          <Body key="changeBackgrounds" title="Background Check" />,
          <Body key="share" title="Making a Scene!">
            <Header>Making a scene!</Header>
            <p>
              Create your own story with animated characters from Scratch. Check
              that all the requirements are met and then share your creation
              with the world.
            </p>

            <Header>Before you submit your project, check that you: </Header>
            <Checkbox>change your backdrop at some point.</Checkbox>
            <Checkbox>make your characters move around.</Checkbox>
            <Checkbox>have characters who say something.</Checkbox>
            <Checkbox>make sound.</Checkbox>
            <Checkbox>shared your project.</Checkbox>

            <Header>
              Copy and paste the URL of your project when you're done:
            </Header>
            <ProjectSubmission />
            <Button>Finished!</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Scratch1;
