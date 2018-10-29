import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video, Image, Code } from "../../Subject/SubjectStyles";
import EmbeddedGist from "../../Subject/EmbeddedGist";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class Arduino1 extends React.Component {
  render() {
    return (
      <Subject title="Arduino Basics" urlName="arduinobasics1">
        {[
          <Body key="arduino_setup" title="Set up">
            <Header>Set up</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535374830/mrteacherkevin/Arduino/arduino_intro.mp4" />
            <Header>Link to Tinkercad:</Header>
            <p>
              <a
                href="https://www.tinkercad.com/#/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Link to Tinkercad
              </a>
            </p>
            <Header>Your screen should look like this...</Header>
            <Image src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/arduino_intro_screenshot.png"/>
            <Header>Check that...</Header>
            <Checkbox>yes, my screen looks like that.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="serialPrint" title="Serial Print">
            <Header>Serial Print</Header>
            <Video src = "">
            <Header>I have...</Header>
            <Checkbox>printed something to the serial montior using void setup().</Checkbox>
            <Checkbox>printed something to the serial montior using void loop().</Checkbox>
            <Button>Next</Button>
            {/* <EmbeddedGist gist="kevin578/ac5fe9de6e6ae2a6bc1bfb52f003f666" /> */}
          </Body>,

          <Body key="delay" title="What's the Delay?">
            <Header>What's the Delay?</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/delay.mp4"/>
            <Header>I have...</Header>
            <Checkbox>added a longer delay between messages.</Checkbox>
            <Checkbox>added a shorter delay between messages.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="datatypes" title="Strings and Numbers, Oh My">
            <Header>Strings and Numbers, Oh My</Header>
            <p style={{ fontSize: 18 }}>
              In programming, data can be stored as different types. Three of
              the most prominent types are strings, numbers, and booleans.
              Answer the following questions, use the video or test your own
              code if needed.
            </p>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535413437/mrteacherkevin/Arduino/datatypes.mp4" />
            <Question
              type="mc"
              correctAnswer="string"
              choices={[
                "string",
                "number",
                "boolean",
                "Nothing, it will be an error"
              ]}
            >
              1. Serial.println("Hello") will print a ...
            </Question>

            <Question
              type="mc"
              correctAnswer="boolean"
              choices={[
                "string",
                "number",
                "boolean",
                "Nothing, it will be an error"
              ]}
            >
              2. Serial.println(true) will print a ...
            </Question>

            <Question
              type="mc"
              correctAnswer="Nothing, it will be an error"
              choices={[
                "string",
                "number",
                "boolean",
                "Nothing, it will be an error"
              ]}
            >
              3. Serial.println(Hello) will print a ...
            </Question>

            <Question
              type="mc"
              correctAnswer="number"
              choices={[
                "string",
                "number",
                "boolean",
                "Nothing, it will be an error"
              ]}
            >
              4. Serial.println(7) will print a ...
            </Question>

            <Question
              type="mc"
              correctAnswer="15"
              choices={["15", "7 + 8", "7", "Nothing, it will be an error"]}
            >
              5. Serial.println(7 + 8) will print...
            </Question>

            <Question
              type="mc"
              choices={["15", "7 + 8", "7", "Nothing, it will be an error"]}
              correctAnswer="7 + 8"
            >
              6. Serial.println("7 + 8") will print...
            </Question>

            <Button>Next</Button>
          </Body>,

          <Body key="variable" title="Very Variable">
            <Header>Very Variable</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535563141/mrteacherkevin/Arduino/variables.mp4"/>
            <Header>Create a document that...</Header>
            <Checkbox>has 2 string variables</Checkbox>
            <Checkbox>has 1 number variables.</Checkbox>
            <Checkbox>
              uses the variables to display alternating messages.
            </Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="counting" title="The Count">
            <Header>The Count</Header>
            <p>Create a program that counts up forever. Like so</p>
            <Image src="https://res.cloudinary.com/ddrd9osrk/image/upload/v1535392404/mrteacherkevin/Arduino/thecount.gif" />
            <p>This code may help you</p>
            <EmbeddedGist gist="kevin578/08c2944598175ca50472f11754b11275" />
            <Header>Check that you have...</Header>
            <Checkbox>
              made a program that continuously counts up by one.
            </Checkbox>
            <Checkbox>there is one second between each count.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="loop" title="Out of the Loop">
            <Header>Out of the Loop</Header>
            <p>The loop below will count to 50:</p>
            <EmbeddedGist gist="kevin578/dace3d0dcadf98a1d487a3c1624c7afd" />
            <Header>Create two more loops that...</Header>
            <Checkbox>count from 8 to 13.</Checkbox>
            <Checkbox>Then count from 13 to 8.</Checkbox>
            <Header>Like so...</Header>
            <Image src="https://res.cloudinary.com/ddrd9osrk/image/upload/v1535393460/mrteacherkevin/Arduino/outoftheloop.gif" />
            <Button>Next</Button>
          </Body>,

          <Body key="arduinoifthen" title="Check Yourself">
            <Header>Check Yourself</Header>
            <p>This video talks about if/then statements:</p>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1535563906/mrteacherkevin/Arduino/ifthen.mp4"/>
            <Header>Starter code:</Header>
            <EmbeddedGist gist="kevin578/11b4733b0c5ecfc5f64e06cbe2d4ce07" />
            <Header>Create a program that...</Header>
            <Checkbox>
              unlocks a message when the user enters the password.
            </Checkbox>
            <Button badge = {"programmingABCs"}>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default Arduino1;

//   <Body key="functions" title="Functioning">
//     <Header>Do something again</Header>
//     <Button>Next</Button>
//   </Body>,

//   <Body key="event" title="The Main Event">
//     <Header>Do something again</Header>
//     <Button>Next</Button>
//   </Body>,

//   <Body key="again" title="Quiz Time">
//     <Header>Do something again</Header>
//     <Button>Next</Button>
//   </Body>
//
