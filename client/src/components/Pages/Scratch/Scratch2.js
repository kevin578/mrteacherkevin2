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
            <Header></Header>
            <p>Make a pet that wants to be pet. When you hover your mouse over it, they become happy. Like so:</p>
            <Image src = "https://res.cloudinary.com/ddrd9osrk/image/upload/v1533829525/ifthenelse.gif" />
            <Header>I have...</Header>
            <Checkbox>a pet that says one thing when my mouse is not touching it,</Checkbox>
            <Checkbox>and says another thing when my mouse is touching it.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key = "changeXY" title = "Under Control">
            <Header>I can...</Header>
            <Checkbox>use the arrow keys to change the X and Y position of my characters.</Checkbox>
            <Button>Next</Button>
          </Body>,
          <Body key = "moveBlock" title = "Step Up">
          <Header>I can...</Header>
          <Checkbox>use the move block to make my sprite move.</Checkbox>
          <Checkbox>use the rotation blocks to change the direction of the movemnt</Checkbox>
          <Button>Next</Button>
          </Body>,
          <Body key = "variable" title = "Variables">
          <Header>I have...</Header>
          <Checkbox>used a variable in a meaningful way.</Checkbox>
          <Button>Next</Button>
          </Body>,

          <Body key = "events" title = "The Main Event">
          <Header>I have...</Header>
          <Checkbox>broadcasted an event and used a listener.</Checkbox>
          <Button>Next</Button>
          </Body>,
          <Body key = "question" title = "Question Time">
          <Header>I have...</Header>
          <Checkbox>used the ask block.</Checkbox>
          <Checkbox>used the answer block in a meaningful way.</Checkbox>
          <Button>Next</Button>
          </Body>,
          <Body key = "clones" title = "Attack of the Clones">
          <Header>I have...</Header>
          <Checkbox>used a clone</Checkbox>
          <Button>Next</Button>
          </Body>
          



        ]}
      </Subject>
    );
  }
}

export default Scratch2;
