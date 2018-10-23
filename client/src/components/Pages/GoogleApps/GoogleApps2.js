import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class GoogleApps2 extends React.Component {
  render() {
    return (
      <Subject title="Google Apps" urlName="googleapps2">
        {[
          <Body key="intro" title="Getting Started">
            <Header>Get Started</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/slidesintro.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created a new Google Slide.</Checkbox>
            <Checkbox>given it a name.</Checkbox>
            <Checkbox>given it a blank layout.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="background" title="Backgrounds">
            <Header>Backgrounds</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/backgrounds.mp4"/>
            <Header>I have...</Header>
            <Checkbox>used a plain solid color for a background.</Checkbox>
            <Checkbox>used a custom gradient for a background.</Checkbox>
            <Checkbox>used an image for a background.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key = "text" title= "Text">
          <Header>Text</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/slidesText.mp4"/>
          <Header>I have...</Header>
          <Checkbox>added Word Art.</Checkbox>
          <Checkbox>added a text box.</Checkbox>
          <Checkbox>changed the font.</Checkbox>
          <Checkbox>changed the font color.</Checkbox>
          <Button>Next</Button>
          </Body>,

          <Body key = "images" title = "Shapes and Images">
            <Header>Shapes and Images</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/slides/slidesImage.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added an image.</Checkbox>
            <Checkbox>added a shape.</Checkbox>
          </Body>,

          

        ]}
      </Subject>
    );
  }
}

export default GoogleApps2;