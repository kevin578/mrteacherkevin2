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
                    <p>Mess around with the move block. Try </p>
                    <Header>Resources</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                </Body>,

                <Body key title = "Yardstick" >
                    <Header>Get your robot to move the length of a yardstick.</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                    <Button>Next</Button>
                </Body>,

                <Body key title = "Go and come back" >
                    <p>Get your robot to go to the </p>
                    <Button badge = 'three_star'>Next</Button>
                </Body>,
                <Body key title = "Go and comeback">
                    Go and comeback
                    <Button badge = 'Robotic Renegade'>Next</Button>
                </Body>

            ]}

            </Subject>


        )
    }

}

export default LegoMindstorms1;