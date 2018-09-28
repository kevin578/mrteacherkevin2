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
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/intro.mp4" />
            <Header>I have...</Header>
            <Checkbox>created a Codepen account.</Checkbox>
            <Checkbox>created a new, blank pen.</Checkbox>
            <Checkbox>changed the name of that pen.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="tags" title="Tags">
            <Header>Tags</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/tags.mp4" />
            <Header>I have...</Header>
            <Checkbox>added a header tag.</Checkbox>
            <Checkbox>added a paragraph tag.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="codepen" title="Codepen Configuration">
            <Header>Codepen Configuration</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/codepen.mp4" />
            <Header>I have...</Header>
            <Checkbox>tried the fullscreen Codepen view.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="images" title="Images">
            <Header>Images</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/images.mp4" />
            <Header>I have...</Header>
            <Checkbox>added an image.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="links" title="Links">
            <Header>Links</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/links.mp4" />
            <Header>I have...</Header>
            <Checkbox>added a link.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="cssintro" title="CSS">
            <Header>CSS</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/css.mp4" />
            <Header>I have...</Header>
            <Checkbox>used a hex color to changed the background.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/textcss.mp4" />
            <Header>I have...</Header>
            <Checkbox>used Google Fonts to change a font type.</Checkbox>
            <Checkbox>changed a font size.</Checkbox>
            <Checkbox>changed a font color.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="boxmodel" title="Margins and Padding">
            <Header>Text</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/boxmodel.mp4" />
            <Header>I have...</Header>
            <Checkbox>used margins.</Checkbox>
            <Checkbox>used padding.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="divsclasses" title="Divs and Classes">
            <Header>Text</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/divsclasses.mp4" />
            <Header>I have...</Header>
            <Checkbox>created a div.</Checkbox>
            <Checkbox>used a class to change an element's styling.</Checkbox>
            <Button>Next</Button>
          </Body>


        ]}
      </Subject>
    );
  }
}

export default HtmlCss1;
