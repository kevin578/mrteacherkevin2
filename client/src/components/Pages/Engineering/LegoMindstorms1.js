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
            <Header>Create a file and get connected</Header>
            <p>
              Before we can get start programming, we need to take care of a
              couple things: a) make a new file and b) create a connection
              between our robot and computer. Note: The Bluetooth on the robots
              can be a bit tempermental. If it's not working for you, use the
              wire that comes with the robot to connect instead.
            </p>
            <Header>Check that you have...</Header>
            <Checkbox>created a new file.</Checkbox>
            <Checkbox>connected your robot to the computer.</Checkbox>
            <Button>Next</Button>
            <Header>Watch this if you need help:</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1532818880/mrteacherkevin/legomindstorms_setup.mp4" />
          </Body>,

          <Body key="move" title="Let's Move">
            <Header>Let's move</Header>
            <p>
              It's time to get the robot moving. Take out the move steering
              block and see what ways you can make do.
            </p>
            <Header>Can you...</Header>
            <Checkbox>make your robot go forward?</Checkbox>
            <Checkbox>make your robot go backward?</Checkbox>
            <Checkbox>make your robot spin around?</Checkbox>
            <Checkbox>make your robot go real slow?</Checkbox>
            <Checkbox>make your robot go real fast?</Checkbox>
            <Button changeScoreValue={2}>I'm done</Button>
            <Header>Here's some guidance:</Header>
            <Video src="https://res.cloudinary.com/ddrd9osrk/video/upload/v1532818231/mrteacherkevin/move_block.mp4" />
          </Body>,

          <Body key="projectName" title="Say My Name">
            <Header>Say My Name</Header>
            We need to make sure our projecd is organized! Give both your
            project and program a name.
            <Header>Check these off when you have...</Header>
            <Checkbox>named your project.</Checkbox>
            <Checkbox>named your program.</Checkbox>
            <Button>Next</Button>
            <Header>Look here if you need some help:</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1532900819/mrteacherkevin/mindstorms_name.mp4"/>
          </Body>,

          <Body key="yardstick" title="Yardstick">
            <Header>Yardstick</Header>
            <p>Get your robot to move the length of a yard stick, like so:</p>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/ac_none/v1532900247/mrteacherkevin/VID_20180729_172753.mp4"/>
            <Header>Check here when completed</Header>
            <Checkbox>I did it!</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="comeBack" title="Boomerang">
            <Header>Boomerang</Header>
            <p>
              Get your robot to go to the end of the yard stick, turn around,
              and come back, like so:
            </p>
            <Video src = "http://res.cloudinary.com/ddrd9osrk/video/upload/ac_none/v1532900265/mrteacherkevin/boomerang.mp4"/>
            <Header>Check here when completed</Header>
            <Checkbox>Yep, I did it.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="secondMotor" title="One More Motor">
            <Header>One more motor</Header>
            <p>
              Connect a third motor to your robot. Then make your robot start in
              one spot, drive forward, then knock something over. A Lego person would be a good choice, especially one you don't like!
            </p>
            <Header>Check here when you have...</Header>
            <Checkbox>connected a third motor to your robot.</Checkbox>
            <Checkbox>knocked something over over!</Checkbox>
            <Button>Next</Button>
            <Header>If you need a helping hand...</Header>
            <Video src = "https://res.cloudinary.com/ddrd9osrk/video/upload/v1532902022/mrteacherkevin/largeMotor.mp4"/>
          </Body>,

          <Body key="touchSensor" title="Touch sensor">
            <Header>Touch Sensor</Header>
            <p>
              Get your robot to bump into a wall, turn around, and go in the
              other direction.
            </p>
            <Header>Check that you have...</Header>
            <Checkbox>added a touch sensor to your robot.</Checkbox>
            <Checkbox>made your robot sense a wall, back up, turn around, and go the other way.</Checkbox>
            <Button>Next</Button>
            <Header>This video's got a bunch of info for you:</Header>
            <Video src="https://www.youtube.com/embed/DsxoIAB-sYk" iframe/>
          </Body>,

          <Body key="ultrasonic" title="Ultrasonic sensor">
            <Header>Ultrasonic Sensor</Header>
            <p>
              Get your robot to sense a wall, turn around, and go in the other
              direction. It works just like the touch sensor.
            </p>
            <Header>Check that you have...</Header>
            <Checkbox>added an ultrasonic sensor to your robot.</Checkbox>
            <Checkbox>made your robot sense a wall, back up, turn around, and go the other way.</Checkbox>
            <Button badge="two_star" changeScoreValue={8}>
              Next
            </Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default LegoMindstorms1;
