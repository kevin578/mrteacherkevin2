import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import ProjectSubmission from "./../../Subject/ProjectSubmission";
import Button from "../../Subject/Button";

class GoogleDocs1 extends React.Component {
  render() {
    return (
      <Subject title="Google Docs" urlName="googledocs1">
        {[
          <Body key="starting" title="Getting Started">
            <Header>Getting Started</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/google-docs/google-docs-intro.mp4" />
            <Header>I have...</Header>
            <Checkbox>created a new Google Doc.</Checkbox>
            <Checkbox>named my project.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="fonts" title="Fonts">
            <Header>Fonts</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/google-docs/google-docs-text.mp4" />
            <Header>I have...</Header>
            <Checkbox>changed my font type.</Checkbox>
            <Checkbox>changed my font size.</Checkbox>
            <Checkbox>changed my font color.</Checkbox>
            <Checkbox>centered my title.</Checkbox>
            <Checkbox>left-aligned my other text.</Checkbox>
            <Checkbox>used either a bold, italic, or underline</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="images" title="Images">
            <Header>Images</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/google-docs/google-docs-images.mp4" />
            <Header>I have...</Header>
            <Checkbox>added an image.</Checkbox>
            <Checkbox>add a drawing.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>Share</Header>
            <p>Write a story or essay about a subject of your choosing.</p>
            <Header>Make sure the title...</Header>
            <Checkbox>is centered</Checkbox>
            <Checkbox>has a different font type than the body.</Checkbox>
            <Checkbox>has a larger font than the body.</Checkbox>
            <Checkbox>has a different font color than the body.</Checkbox>
            <Header>Make sure the body...</Header>
            <Checkbox>is left aligned.</Checkbox>
            <Checkbox>has a different font type than the title.</Checkbox>
            <Checkbox>has a smaller font than the title.</Checkbox>
            <Checkbox>has a different font color than the title.</Checkbox>
            <Checkbox>contains an image.</Checkbox>
            <Header>How to share...</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/google-docs/docs1share.mp4" />
            <Header>Share your story here:</Header>
            <ProjectSubmission projectKey="firstGoogleDocsStory" />
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default GoogleDocs1;
