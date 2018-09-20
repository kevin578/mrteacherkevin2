import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class HtmlCss1 extends React.Component {
  render() {
    return (
      <Subject title="HTML & CSS" urlName="htmlcss1">
        {[
          <Body key="intro" title="Intro">
            <Header>Intro</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448507/mrteacherkevin/html/intro.mp4"/>
            <Header>I have...</Header>
            <Checkbox>created a Codepen account.</Checkbox>
            <Checkbox>created a new, blank pen.</Checkbox>
            <Checkbox>changed the name of that pen.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="tags" title="Tags">
            <Header>Tags</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448510/mrteacherkevin/html/tags.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added a header tag.</Checkbox>
            <Checkbox>added a paragraph tag.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="codepen" title="Codepen Configuration">
            <Header>Codepen Configuration</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448509/mrteacherkevin/html/codepen.mp4"/>
            <Header>I have...</Header>
            <Checkbox>tried the fullscreen Codepen view.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="images" title="Images">
            <Header>Images</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448509/mrteacherkevin/html/images.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added an image.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="links" title="Links">
            <Header>Links</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448510/mrteacherkevin/html/links.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added a link.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="cssintro" title="CSS">
            <Header>CSS</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1537448511/mrteacherkevin/html/css.mp4"/>
            <Header>I have...</Header>
            <Checkbox>used a hex color to changed the background.</Checkbox>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default HtmlCss1;
