import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video, Image } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Scratch2 extends React.Component {
  render() {
    return (
      <Subject title="Scratch" urlName="scratch2">
        {[
          <Body key="ifthenelse" title="If then else">
            <Header>If then else</Header>
            <p>Make a pet that wants to be pet. When you hover your mouse over it, they become happy. Like so:</p>
            <Image src = "https://res.cloudinary.com/ddrd9osrk/image/upload/v1533829525/ifthenelse.gif" />
            <Header>I have...</Header>
            <Checkbox>a pet that says one thing when my mouse is not touching it,</Checkbox>
            <Checkbox>and says another thing when my mouse is touching it.</Checkbox>
            <Header>Answer these questions before moving on:</Header>
            <Question
              type="mc"
              choices={["circle", "trapezoid", "square", "triangle"]}
              correctAnswer = "trapezoid"
            >
              What shape are boolean blocks?
            </Question>
            <Question correctAnswer = "2">
              How many values can a boolean block have?
            </Question>
            <Button>Next</Button>
          </Body>,

          <Body key="moveWithKeys" title="Move with the Arrows" />,
          <Body key="bounce" title="One Way then Antother" />,
          <Body key="moveAndRotate" title="Rotation Rotation Rotation" />,
          <Body key="value" title="Value Blocks" />,
          <Body key="doubler" title="The Doubler" />,
          <Body key="answer" title="Answer Me this" />,
          <Body key="variables" title="Stopwatch" />,
          <Body key="drums" title="Drum Machine" />,
          <Body key="events" title="The Main Event" />,
          <Body key="quiz" title="Quiz Game" />,
          <Body key="quiz" title="Action Game" />,
          



        ]}
      </Subject>
    );
  }
}

export default Scratch2;
