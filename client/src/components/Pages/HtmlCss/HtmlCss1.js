import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import ProjectSubmission from "../../Subject/ProjectSubmission";
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

          <Body key="changeImageWidth" title="Changing an Image Width">
            <Header>Changing an Image Width</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/cssChangeImageSize.mp4" />
            <Header>I have...</Header>
            <Checkbox>changed the size of an image.</Checkbox>
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
          </Body>,

          <Body key="cssreset" title="CSS Reset">
            <Header>CSS Reset</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/cssreset.mp4" />
            <Header>I have...</Header>
            <Checkbox>done a CSS reset.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="containersAbridged" title="Containers">
            <Header>Containers</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/containersAbridged.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              created a container that is a different color than the rest of the
              site.
            </Checkbox>
            <Checkbox>
              created a container that holds an image and text.
            </Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="imageAsLink" title="Images as Links">
            <Header>Images as Links</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/imageAsLink.mp4" />
            <Header>I have...</Header>
            <Checkbox>made a picture that also acts as a link.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>Make sure your final website has...</Header>
            <Checkbox>a different font.</Checkbox>
            <Checkbox>at least one hex color.</Checkbox>
            <Checkbox>a div with that contains multiple elements.</Checkbox>
            <Checkbox>an image that is also a link.</Checkbox>
            <Header>To share, watch this:</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/htmlcss/shareHTML.mp4" />
            <Header>Share your project here:</Header>
            <ProjectSubmission projectKey="firstwebsite" />
            <Button>Submit</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default HtmlCss1;
