import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Button from "../../Subject/Button";

export default class Tinkercad1 extends React.Component {
  render() {
    return (
      <Subject title="Tinkercad" urlName="tinkercad1">
        {[
          <Body key="starting" title="Getting Started">
            <Header>Starting off</Header>
             <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762738/mrteacherkevin/Tinkercad/intro.mp4" />
            <Header>I have ...</Header>
            <Checkbox>created a new document.</Checkbox>
            <Checkbox>given it a new name.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="camera" title="Camera">
            <Header>Camera</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762739/mrteacherkevin/Tinkercad/camera.mp4" />
            <Header>I can...</Header>
            <Checkbox>rotate the camera.</Checkbox>
            <Checkbox>zoom in and out.</Checkbox>
            <Checkbox>move the camera around.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="shapes" title="Shapes">
            <Header>Shapes</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762743/mrteacherkevin/Tinkercad/shapes.mp4" />
            <Header>I have...</Header>
            <Checkbox>used at least 3 shapes.</Checkbox>
            <Checkbox>changed the width of a shape.</Checkbox>
            <Checkbox>changed the length of a shape.</Checkbox>
            <Checkbox>changed the height of a shape.</Checkbox>
            <Checkbox>moved a shape up and down.</Checkbox>
            <Checkbox>rotated a shape.</Checkbox>
            <Checkbox>changed the radius on a box.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="align" title="Align">
            <Header>Align</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762739/mrteacherkevin/Tinkercad/align.mp4" />
            <Header>I have...</Header>
            <Checkbox>used the align tool.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="group" title="Group">
            <Header>Grouping</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762738/mrteacherkevin/Tinkercad/group.mp4" />
            <Header>I have...</Header>
            <Checkbox>grouped two shapes together.</Checkbox>
            <Checkbox>created a hole in a shape.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="extras" title="Extras">
            <Header>Extras</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1536762737/mrteacherkevin/Tinkercad/extras.mp4" />
            <Header>I have...</Header>
            <Checkbox>duplicated an object.</Checkbox>
            <Checkbox>moved a shape around with a keyboard.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key = "share" title = "Share">
          </Body>
        ]}
      </Subject>
    );
  }
}
