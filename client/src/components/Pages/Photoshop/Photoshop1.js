import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Photoshop1 extends React.Component {
  render() {
    return (
      <Subject title="Photoshop" urlName="photoshop1">
        {[
          <Body key="setup" title="Setup">
            <Header>Setup</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535547964/mrteacherkevin/Photoshop/photoshopIntro.mp4" />
            <Header>Check that you have...</Header>
            <Checkbox>named your project</Checkbox>
            <Checkbox>set the width and height to 11 * 8.5.</Checkbox>
            <Checkbox>made the background white</Checkbox>
            <Button>Next</Button>
            <Header>Here's a video if you need help:</Header>
           
          </Body>,

          <Body key="layers" title="Let's Get Our Bearings">
            <Header>Let's Get Our Bearings</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535549331/mrteacherkevin/Photoshop/layers.mp4" />
            <Button>Next</Button>
           
          </Body>,

          <Body key="again" title="Say Cheese">
            <Header>Say Cheese</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535549980/mrteacherkevin/Photoshop/images.mp4" />
            <Header>Check that you have...</Header>
            <Checkbox>added at least two pictures.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="selection" title="Selection Tools">
            <Header>Selection tools</Header>
            <p>
              Selections allow you to isolate certain parts of your project.
            </p>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535550874/mrteacherkevin/Photoshop/selectionTools.mp4" />
            <Header>I have tried...</Header>
            <Checkbox>the lasso.</Checkbox>
            <Checkbox>the polygonal lasso.</Checkbox>
            <Checkbox>the magnetic lasso.</Checkbox>
            <Checkbox>the quick selection.</Checkbox>
            <Checkbox>the magic wand.</Checkbox>
            <Button>Next</Button>

          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <p>Time to add a little writing to your project.</p>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535556280/mrteacherkevin/Photoshop/text.mp4"/>
            <Header>Check that you have...</Header>
            <Checkbox>changed the font.</Checkbox>
            <Checkbox>changed the font size.</Checkbox>
            <Checkbox>added a layer style.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="sharing" title="Sharing">
            <Header>Sharing</Header>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Photoshop1;
