import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import ProjectSubmission from "./../../Subject/ProjectSubmission";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class WeVideo1 extends React.Component {
  render() {
    return (
      <Subject title="WeVideo" urlName="wevideo1">
        {[
          <Body key="gettingStarted" title="Getting Started">
            <Header>Getting Started</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoIntro.mp4" />
            <Header>I have...</Header>
            <Checkbox>created a new WeVideo account.</Checkbox>
            <Checkbox>created a new project folder.</Checkbox>
            <Checkbox>created a new video inside that project.</Checkbox>
            <Checkbox>changed the name of my video.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="addMedia" title="Adding Media">
            <Header>Adding Media</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/addMedia.mp4" />
            <Header>I have...</Header>
            <Checkbox>added my media into the project folder.</Checkbox>
            <Checkbox>added into the actual movie timeline.</Checkbox>
            <Checkbox>
              clipped it down so it everything is nice and snappy.
            </Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="text" title="Text">
            <Header>Text</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoText.mp4" />
            <Header>I have...</Header>
            <Checkbox>added text to my video.</Checkbox>
            <Checkbox>changed the color of the text.</Checkbox>
            <Checkbox>changed the font type.</Checkbox>
            <Checkbox>added a new background behind my text.</Checkbox>
            <Button>Next</Button>.
          </Body>,

          <Body key="sound" title="Sound">
            <Header>Sound</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoSound.mp4" />
            <Header>I have...</Header>
            <Checkbox>added a song from Youtube Audio Library.</Checkbox>
            <Checkbox>faded that song out.</Checkbox>
            <Checkbox>added a sound effect.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="voiceover" title="Voice Over">
            <Header>Voice Over</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoVoiceOver.mp4" />
            <Button>Next</Button>
          </Body>,

          <Body key="transitions" title="Transitions">
            <Header>Transitions</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/weVideoTransitions.mp4" />
            <Header>I have...</Header>
            <Checkbox>added a transition</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
            <Header>Before you share your video, make sure it...</Header>
            <Checkbox>is no more than 1 minute long.</Checkbox>
            <Checkbox>contains exactly 3 seperate video shots.</Checkbox>
            <Checkbox>has opening credits.</Checkbox>
            <Checkbox>contains music.</Checkbox>
            <Checkbox>contains at least one sound effect.</Checkbox>
            <Checkbox>contains at least one transition.</Checkbox>
            <Header>To share, watch this:</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/wevideo/shareWeVideo.mp4" />
            <Header>Share your project here:</Header>
            <ProjectSubmission key = "wevideo1"/>
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default WeVideo1;
