import React from 'react';
import Subject from './../../Subject/Subject'
import { Body,Header, Video} from '../../Subject/SubjectStyles';
import Button from '../../Subject/Button';

class LegoMindstorms1 extends React.Component  {
    
    render() {
        return (
            <Subject
                title = "Lego Mindstorms"
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
                    Goal: Destroy robot
                </Body>,
                <Body key title = "Super hard test">
                    Super hard test
                </Body>,
                <Body key title = "Move your robot">
                    Move
                </Body>,
                <Body key title = "Make your robot go and comeback">
                    Go and comeback
                </Body>
            ]}

            </Subject>


        )
    }

}

export default LegoMindstorms1;