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
                    <Header>Goal: Make a file</Header>
                    <p>Create a new project. Name the project and program</p>
                    <Header>Resources</Header>
                    <Video src="https://www.youtube.com/embed/IuHaIE-auLQ" />
                    <Button>Next</Button>
                </Body>,

                <Body key title = "Play with the move block">
                    Goal: Destroy robot
                    <Button badge = 'one_star'>Next</Button>
                </Body>,

                <Body key title = "Super hard test" >
                    <Header>Quiz</Header>
                    <TextQuestion correctAnswer = "go">What does the speed button do?</TextQuestion>
                    <TextQuestion correctAnswer = "stop">What does the stop button do?</TextQuestion>
                    <Button quiz badge = 'two_star'>Next</Button>
                </Body>,

                <Body key title = "Move your robot" >
                    Move
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