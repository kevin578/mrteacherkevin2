import React from 'react';
import Subject from './../../Subject/Subject'
import { Body,Header, Video} from '../../Subject/SubjectStyles';
import TextQuestion from '../../Subject/Quiz';
import Button from '../../Subject/Button';


class LegoMindstorms1 extends React.Component  {
    
    

    render() {
        return (
            <Subject
                title = "Lego Mindstorms"
                urlName = "legomindstorms1"
            >
            {[
                <Body key title = "Create a file">
                    <Header>Make a file</Header>
                    <p>Create a new project. Name the project and program</p>
                    <Header>Resources</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                    <Button>Next</Button>
                </Body>,

                <Body key title = "Play with the move block">
                    <Header>Move block</Header>
                    <p>Mess around with the move block. Try </p>
                    <Header>Resources</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                    <Button changeScoreValue = {2}>Next</Button>
                </Body>,

                <Body key title = "Yardstick" >
                    <Header>Get your robot to move the length of a yardstick.</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                    <Button>Next</Button>
                </Body>,

                <Body key title = "Go and come back" >
                    <Header>Go and come back</Header>
                    <p>Get your robot to go to the end of the yard stick, turn around, and come back</p>
                    <Button badge = 'one_star'>Next</Button>
                </Body>,

                <Body key title = "Touch sensor">
                <Header>Touch Sensor</Header>
                   <p>Get your robot to bump into a wall, turn around, and go in the other direction.</p>
                   <Video src = "https://www.youtube.com/embed/DsxoIAB-sYk" />
                    <Button>Next</Button>
                </Body>,

                <Body key title = "Ultrasonic sensor">
                    <Header>Ultrasonic Sensor</Header>
                    <p>Get your robot to sense a wall, turn around, and go in the other direction.</p>
                    <Button badge = 'two_star' changeScoreValue = {8}>Next</Button>
                </Body>,

                <Body key title = "Gyro Sensor">
                <Header>Gyro Sensor</Header>
                <p>Use the gyro sensor to go in a straight line</p>
                <Header>Resources</Header>
                <p>The part about how the ultrasonic sensor works starts at 1:10</p>
                <Video src = 'https://www.youtube.com/embed/W4has2MySCs' />
                <Button>Next</Button>
                </Body>,

                <Body key title = "Follow a line">
                <Header>Follow a line</Header>
                <p>Use the color sensor to follow a line</p>
                <Video src = 'https://www.youtube.com/embed/ye3MhVA9Rhs'/>
                <p>The good line follower program starts at 10:08</p>
                <Button>Next</Button>
                </Body>








            ]}

            </Subject>


        )
    }

}

export default LegoMindstorms1;