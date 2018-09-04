import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Illustrator1 extends React.Component {
  render() {
    return (
      <Subject title="Illustrator" urlName="illustrator1">
        {[
          <Body key="starting" title="Set up">
            <Header>Setup</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064844/mrteacherkevin/illustrator/setup.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>created a new document</Checkbox>
            <Checkbox>a height and width of 12 inches.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="fill" title="Fills and Strokes">
            <Header>Fills and strokes</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064845/mrteacherkevin/illustrator/strokesnfills.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>created at least three different shapes.</Checkbox>
            <Checkbox>changed the fill color.</Checkbox>
            <Checkbox>changed the stroke color.</Checkbox>
            <Checkbox>changed the stroke weight.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="changeShapes" title="Metamorphosis">
            <Header>Metamorphosis</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064845/mrteacherkevin/illustrator/changing.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>used the white arrow manipulate an anchor point.</Checkbox>
            <Checkbox>added an anchor point.</Checkbox>
            <Checkbox>removed an anchor point.</Checkbox>        
            <Button>Next</Button>
          </Body>,

          <Body key="pathfinder" title="Pathfinder">
            <Header>Pathfinder</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064845/mrteacherkevin/illustrator/pathfinder.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>combined shapes using the Pathfinder tool.</Checkbox>
            <Checkbox>created a hole in a shape using the Pathfinder tool.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064845/mrteacherkevin/illustrator/textIllustrator.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>added text to your document.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="image" title="Image Trace">
            <Header>Image Trace</Header>
           <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1536064847/mrteacherkevin/illustrator/imagetrace.mp4"/>
           <Header>Check that you have...</Header>
            <Checkbox>used Image Trace to add a picture.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>Share</Header>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Illustrator1;
