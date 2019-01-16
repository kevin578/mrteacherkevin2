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
            <Image src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/arduino_intro_screenshot.png" />
            <Header>Check that...</Header>
            <Checkbox>yes, my screen looks like that.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="scratchPrint" title="Scratch - Say Something">
            <Header>Say something</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/scratch/say.mp4" />
            <Header>I have...</Header>
            <Checkbox>made my sprite say something.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="serialPrint" title="Serial Print">
            <Header>Serial Print</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/serialMonitor.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              printed something to the serial montior using void setup().
            </Checkbox>
            <Checkbox>
              printed something to the serial montior using void loop().
            </Checkbox>
            <Button>Next</Button>
            {/* <EmbeddedGist gist="kevin578/ac5fe9de6e6ae2a6bc1bfb52f003f666" /> */}
          </Body>,

          <Body key="scratchDelay" title="Scratch - Wait">
            <Header>Wait</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/scratch/delay.mp4" />
            <Header>I have...</Header>
            <Checkbox>
              made my sprite say multple things while waiting in between each
              one.
            </Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="delay" title="What's the Delay?">
            <Header>What's the Delay?</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/delay.mp4" />
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

          <Body key="scratchDelay" title="Scratch - Variables">
            <Header>Variables</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/scratch/variables.mp4" />
            <Header>I have...</Header>
            <Checkbox>used a varable to change the wait values.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="variable" title="Very Variable">
            <Header>Very Variable</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1535563141/mrteacherkevin/Arduino/variables.mp4" />
            <Header>I have...</Header>
            <Checkbox>an integer variable.</Checkbox>
            <Checkbox>a number variable.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="scratchCount" title="Scratch - Counting">
            <Header>Counting</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/scratch/count.mp4" />
            <Header>I have...</Header>
            <Checkbox>made my sprite count.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="counting" title="The Count">
            <Header>The Count</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/thecount.mp4" />
            <Header>I have...</Header>
            <Checkbox>a variable that increases by one.</Checkbox>
            <Checkbox>a variable that increases 2.</Checkbox>
            <Checkbox>one second between each increase.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="loop" title="Out of the Loop">
            <Header>Out of the Loop</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/loopy.mp4" />
            <Header>Create two more loops that...</Header>
            <Checkbox>count from 10 to 30,</Checkbox>
            <Checkbox>and then count from 30 to 10.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="scratchifThen" title="Scratch - If/Then">
            <Header>If/Then</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/scratch/password.mp4" />
            <Header>I have...</Header>
            <Checkbox>used an if/then statement.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="arduinoifthen" title="Check Yourself">
            <Header>Check Yourself</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/arduino/checkyourself.mp4" />
            <Header>Create a program that...</Header>
            <Checkbox>
              unlocks a message when the user enters the password.
            </Checkbox>
            <Button>Next</Button>
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
