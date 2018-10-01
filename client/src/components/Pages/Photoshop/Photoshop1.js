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
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/intro.mp4" />
            <Header>Check that you have...</Header>
            <Checkbox>named your project</Checkbox>
            <Checkbox>set the width and height to 11 * 8.5.</Checkbox>
            <Checkbox>made the background white</Checkbox>
            <Button>Next</Button>
            <Header>Here's a video if you need help:</Header>
           
          </Body>,

          <Body key="layers" title="Let's Get Our Bearings">
            <Header>Let's Get Our Bearings</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/layers.mp4" />
            <Button>Next</Button>
           
          </Body>,

          <Body key = "resetessentials" title = "Reset Essentials">
            <Header>Reset Essentials</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/resetessentials.mp4"/>
            <Header>I have...</Header>
            <Checkbox>deleted my tools and layers.</Checkbox>
            <Checkbox>gotten them back by using reset essentials.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="again" title="Say Cheese">
            <Header>Say Cheese</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/images.mp4" />
            <Header>Check that you have...</Header>
            <Checkbox>added at least two pictures.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="selection" title="Selection Tools">
            <Header>Selection tools</Header>
            <p>
              Selections allow you to isolate certain parts of your project.
            </p>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/selectionTools.mp4" />
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
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/transformations.mp4" />
            <Header>I have...</Header>
            <Checkbox>used the Free Transform tool.</Checkbox>
            <Checkbox>tried at least one Image Adjustment.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <p>Time to add a little writing to your project.</p>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/text.mp4"/>
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
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/Photoshop/share.mp4"/>
          </Body>
        ]}
      </Subject>
    );
  }git 
}

export default Photoshop1;
