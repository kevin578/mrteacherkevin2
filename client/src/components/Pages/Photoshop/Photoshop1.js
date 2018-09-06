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
            <p>
              Let's get setup to work with Photoshop. Make sure you meet the
              requirements below and your project looks like the one below.
            </p>
            <Image src="https://res.cloudinary.com/ddrd9osrk/image/upload/v1535547982/mrteacherkevin/Photoshop/PhotoshopIntroImage.png" />
            <Header>Check that you have...</Header>
            <Checkbox>named your project</Checkbox>
            <Checkbox>set the width and height to 11 * 8.5.</Checkbox>
            <Checkbox>made the background white</Checkbox>
            <Button>Next</Button>
            <Header>Here's a video if you need help:</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535547964/mrteacherkevin/Photoshop/photoshopIntro.mp4" />
          </Body>,

          <Body key="layers" title="Let's Get Our Bearings">
            <Header>Let's Get Our Bearings</Header>
            <p>
              Use this image to answer questions. There is a video below if you
              need help.
            </p>
            <Image src="https://res.cloudinary.com/ddrd9osrk/image/upload/v1535549339/mrteacherkevin/Photoshop/layers_screenshot.png" />
            <Question
              choices={["tool options", "history", "new layer", "delete layer"]}
              correctAnswer="new layer"
            >
              What does number 1 point to?
            </Question>

            <Question
              choices={["tool options", "history", "new layer", "delete layer"]}
              correctAnswer="delete layer"
            >
              What does number 2 point to?
            </Question>

            <Question
              choices={["tool options", "history", "new layer", "delete layer"]}
              correctAnswer="history"
            >
              What does number 3 point to?
            </Question>

            <Question
              choices={["tool options", "history", "new layer", "delete layer"]}
              correctAnswer="tool options"
            >
              What does number 4 point to?
            </Question>

            <Question
              choices={["Green", "Red", "Purple", "Background"]}
              correctAnswer="Red"
            >
              Which layer would not be visible?
            </Question>

            <Question
              choices={["Green", "Red", "Purple", "Background"]}
              correctAnswer="Green"
            >
              Which layer would be in front of all the other layers?
            </Question>

            <Button>Next</Button>
            <Header>Use this video if you need help:</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535549331/mrteacherkevin/Photoshop/layers.mp4" />
          </Body>,

          <Body key="again" title="Say Cheese">
            <Header>Say Cheese</Header>
            <p>It's time to add some pictures!</p>
            <Header>Check that you have...</Header>
            <Checkbox>added at least two pictures.</Checkbox>
            <Button>Next</Button>
            <Header>Use this video if you need help:</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535549980/mrteacherkevin/Photoshop/images.mp4" />
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
            <Question
              correctAnswer="Command D"
              choices={["Command D", "Shift D", "Alt D", "Double Click"]}
            >
              How do you deselect your selection?
            </Question>

            <Question
              correctAnswer="Select > Inverse"
              choices={[
                "Layer > Inverse",
                "Layer > Mask",
                "Select > Isolate",
                "Select > Inverse"
              ]}
            >
              How do you inverse your selection?
            </Question>
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
            <Question
              choices={[
                "change the font property.",
                "add a gradiant base.",
                "select it.",
                "emboss the finish."
              ]}
            >
              If you want to add a gradiant to your text you need to first...
            </Question>
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
