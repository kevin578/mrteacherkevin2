import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import ProjectSubmission from "../../Subject/ProjectSubmission";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class GoogleSlides1 extends React.Component {
  render() {
    return (
      <Subject title="Google Slides" urlName="googleslides1">
        {[
          <Body key="intro" title="Getting Started">
            <Header>Get Started</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/slidesintro.mp4" />
            <Header>I have...</Header>
            <Checkbox>created a new Google Slide.</Checkbox>
            <Checkbox>given it a name.</Checkbox>
            <Checkbox>given it a blank layout.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="background" title="Backgrounds">
            <Header>Backgrounds</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/backgrounds.mp4" />
            <Header>I have...</Header>
            <Checkbox>used a plain solid color for a background.</Checkbox>
            <Checkbox>used a custom gradient for a background.</Checkbox>
            <Checkbox>used an image for a background.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/slidesText.mp4" />
            <Header>I have...</Header>
            <Checkbox>added Word Art.</Checkbox>
            <Checkbox>added a text box.</Checkbox>
            <Checkbox>changed the font.</Checkbox>
            <Checkbox>changed the font color.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="images" title="Shapes and Images">
            <Header>Shapes and Images</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/images.mp4" />
            <Header>I have...</Header>
            <Checkbox>added an image.</Checkbox>
            <Checkbox>added a shape.</Checkbox>
            <Checkbox>changed the stroke and fill on a shape.</Checkbox>
            <Checkbox>cropped an image.</Checkbox>
            <Checkbox>used the format options on either an image or a shape.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="transitions" title="Transitions">
            <Header>Transitions</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/transitions.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added a transition</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key = "animations" title = "Animations">
            <Header>Animations</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/animations.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added an animation</Checkbox>  
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>I have...</Header>
            <Checkbox>a slideshow that consists of exactly 5 slides.</Checkbox>
            <Checkbox>one slide that has an image background.</Checkbox>
            <Checkbox>one slide that has a gradient background.</Checkbox>
            <Checkbox>text with a font different than Ariel.</Checkbox>
            <Checkbox>a shape with a different fill and line color.</Checkbox>
            <Checkbox>text in the speaker notes.</Checkbox>
            <Checkbox>a small amount of text in my actual slideshow.</Checkbox>
            <Checkbox>an animation.</Checkbox>
            <Checkbox>a transition.</Checkbox>
            <Checkbox>an example of word art.</Checkbox>
            <Header>How to share:</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/share.mp4"/>
            <Header>Share your amazing slideshow here:</Header>
            <ProjectSubmission projectKey = "slideshowoff"/>
            <Button>Submit</Button>

          </Body>
        ]}
      </Subject>
    );
  }
}

export default GoogleSlides1;