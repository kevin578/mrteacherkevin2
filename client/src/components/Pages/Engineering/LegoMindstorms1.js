import React from "react";
import Subject from "./../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "./../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class LegoMindstorms1 extends React.Component {
  render() {
    return (
      <Subject title="Lego Mindstorms" urlName="legomindstorms1">
        {[
          <Body key="makeFile" title="Create a file">
            <Header>Make a file</Header>
            <p>Create a new project. Name the project and program</p>
            <Header>Resources</Header>
            <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
            <Button>Next</Button>
          </Body>,

          <Body key="move" title="Play with the move block">
            <Header>Move block</Header>
            <p>Mess around with the move block. Try </p>
            <Header>Resources</Header>
            <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
            <Button changeScoreValue={2}>Next</Button>
          </Body>,

          <Body key="yardstick" title="Yardstick">
            <Header>Get your robot to move the length of a yardstick.</Header>
            <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
            <Button>Next</Button>
          </Body>,

          <Body key="comeBack" title="Go and come back">
            <Header>Go and come back</Header>
            <p>
              Get your robot to go to the end of the yard stick, turn around,
              and come back
            </p>
            <Button badge="one_star">Next</Button>
          </Body>,

          <Body key="touchSensor" title="Touch sensor">
            <Header>Touch Sensor</Header>
            <p>
              Get your robot to bump into a wall, turn around, and go in the
              other direction.
            </p>
            <Video src="https://www.youtube.com/embed/DsxoIAB-sYk" />
            <Button>Next</Button>
          </Body>,

          <Body key="ultrasonic" title="Ultrasonic sensor">
            <Header>Ultrasonic Sensor</Header>
            <p>
              Get your robot to sense a wall, turn around, and go in the other
              direction.
            </p>
            <Header>Resources</Header>
            <p>The part about how the ultrasonic sensor works starts at 1:10</p>
            <Video src="https://www.youtube.com/embed/W4has2MySCs" />
            <Button badge="two_star" changeScoreValue={8}>
              Next
            </Button>
          </Body>,

          <Body key="Gyro" title="Gyro Sensor">
            <Header>Gyro Sensor</Header>
            <p>Use the gyro sensor to go in a straight line</p>
            <Video src="https://youtube.com/embed/CBzUYdzsOQA" />
            <Header>Resources</Header>
            <Button>Next</Button>
          </Body>,

          <Body key="quiz1" title="Quiz">
            <Header>Quiz</Header>
            <p>Answer the questions</p>
            <Question type="text" correctAnswer="Kevin">
              What's your name?
            </Question>
            <Question type="text" correctAnswer="Carlos">
              What's your nombre?
            </Question>

            <Button>Next</Button>
          </Body>,

          <Body key="line" title="Follow a line">
            <Header>Follow a line</Header>
            <p>Use the color sensor to follow a line</p>
            <Video src="https://www.youtube.com/embed/ye3MhVA9Rhs" />
            <p>The good line follower program starts at 10:08</p>
            <Question type="text" correctAnswer="Pablo">
              Whats your other nombre?
            </Question>
            <Button>Next</Button>
          </Body>,

          <Body key="myblocks" title="MyBlocks">
            <Header>MyBlocks</Header>
            <p>Create a Myblock that saves the straight line porgram</p>
            <Header>Resources</Header>
            <Button>Next</Button>
          </Body>,

          <Body key="file" title="Write a file">
            <Header>Write a file</Header>
            <p>
              Create a voting machine that records two choices and saves them to
              a file.
            </p>
            <Video src="https://www.youtube.com/embed/RdW5NQUvWnA" />
            <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default LegoMindstorms1;
