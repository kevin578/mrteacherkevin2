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
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Fintro.mp4?alt=media&token=0cae5f86-2bc7-4c82-abac-6337580ca49b" />
            <Header>Check that you have...</Header>
            <Checkbox>named your project</Checkbox>
            <Checkbox>set the width and height to 11 * 8.5.</Checkbox>
            <Checkbox>made the background white</Checkbox>
            <Button>Next</Button>
            <Header>Here's a video if you need help:</Header>
           
          </Body>,

          <Body key="layers" title="Let's Get Our Bearings">
            <Header>Let's Get Our Bearings</Header>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Flayers.mp4?alt=media&token=427d77c8-d24b-4b5a-8c69-3646841e7ecc" />
            <Button>Next</Button>
           
          </Body>,

          <Body key = "resetessentials" title = "Reset Essentials">
            <Header>Reset Essentials</Header>
            <Video src = "https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Fresetessentials.mp4?alt=media&token=e6ee0fd1-d091-4341-af92-00860dd703f9"/>
            <Header>I have...</Header>
            <Checkbox>deleted my tools and layers.</Checkbox>
            <Checkbox>gotten them back by using reset essentials.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="again" title="Say Cheese">
            <Header>Say Cheese</Header>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Fimages.mp4?alt=media&token=3b3b45b9-f1f4-476c-967f-2cb0e3706312" />
            <Header>Check that you have...</Header>
            <Checkbox>added at least two pictures.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="selection" title="Selection Tools">
            <Header>Selection tools</Header>
            <p>
              Selections allow you to isolate certain parts of your project.
            </p>
            <Video src="https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2FselectionTools.mp4?alt=media&token=70428160-475f-4e57-b0f3-9b3e5743f103" />
            <Header>I have tried...</Header>
            <Checkbox>the lasso.</Checkbox>
            <Checkbox>the polygonal lasso.</Checkbox>
            <Checkbox>the magnetic lasso.</Checkbox>
            <Checkbox>the quick selection.</Checkbox>
            <Checkbox>the magic wand.</Checkbox>
            <Button>Next</Button>

          </Body>,

          <Body key = "freetransform" title = "Free Transform">
            <Header>Free Transform</Header>
            <Video src = "https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Ftransformations.mp4?alt=media&token=c2b3f759-b4a9-468a-b2a9-2d2a3768863d" />
            <Header>I have...</Header>
            <Checkbox>used the Free Transform tool.</Checkbox>
            <Checkbox>tried at least one Image Adjustment.</Checkbox>
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
            <Header>Your final product should...</Header>
            <Checkbox>have at least 3 layers.</Checkbox>
            <Checkbox>have some text, preferably your name.</Checkbox>
            <Checkbox>have a font is a different font than Myriad Pro.</Checkbox>
            <Checkbox>use at least one of the Blending Options.</Checkbox>
            <Header>Once you have completed all the objectives, watch this video:</Header>
            <Video src = "https://firebasestorage.googleapis.com/v0/b/mrteacherkevin-204010.appspot.com/o/Photoshop%2Fshare.mp4?alt=media&token=d0d1121a-bf3b-417a-b2c0-d2a09819a28b"/>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Photoshop1;
