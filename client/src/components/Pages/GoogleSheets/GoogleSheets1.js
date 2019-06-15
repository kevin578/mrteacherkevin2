import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import Button from "../../Subject/Button";

class GoogleSheets1 extends React.Component {
  render() {
    return (
      <Subject title="Google Sheets" urlName="googlesheets1">
        {[
          <Body key="starting" title="Setup">
            <Header>Setup</Header>
            <Image src = "https://res.cloudinary.com/ddrd9osrk/image/upload/v1535639159/mrteacherkevin/Sheets/sheetsSetup.gif"></Image>
            <Header>Check that you have...</Header>
            <Checkbox>created a new Google Sheet.</Checkbox>
            <Checkbox>given it a title.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="cell" title="Cells">
            <Header>Cells</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535639159/mrteacherkevin/Sheets/cells.mp4" />
            <Header>Use the picture below to answer the questions:</Header>
            <Image src = "https://res.cloudinary.com/ddrd9osrk/image/upload/v1535640456/mrteacherkevin/Sheets/cellScreenShot.png"/>
            <Question correctAnswer = "yellow" choices = {["red", "green", "yellow", "purple"]}>What color is cell B4?</Question>
            <Question correctAnswer = "D">What column is the purple cell in?</Question>
            <Question correctAnswer = "2">What row is the red cell in?</Question>
            <Question correctAnswer = "A5">What is the name of the green cell? (ie B7, A2, F4)</Question>
            <Button>Next</Button>
          </Body>,

          <Body key="writing" title="Writing">
            <Header>Writing</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535639587/mrteacherkevin/Sheets/text.mp4" />
            <Header>Check that you...</Header>
            <Checkbox>have he text for all your schedule filled out.</Checkbox>
            <Checkbox>have at least one merged cell.</Checkbox>
            <Checkbox>know how to center the content of a cell.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="style" title="Style">
            <Header>Style</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535640149/mrteacherkevin/Sheets/style.mp4" />
            <Header>Check that you...</Header>
            <Checkbox>have changed your font.</Checkbox>
            <Checkbox>have changed the color of the cell background.</Checkbox>
            <Checkbox>know how to add borders around your cell.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="share" title="Share">
          <Header>Share</Header>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default GoogleSheets1;
