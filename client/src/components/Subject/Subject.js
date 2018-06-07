import React from 'react';
import styled from 'styled-components';
import Header from './../Header';
import Sidebar from './Sidebar';
import SubjectBody from './SubjectBody';


const Body = styled.div`
    display: flex;
`

class Subject extends React.Component {
    render(){
        return (
            <div>
            <Header />
            <Body>
                <Sidebar steps = {this.props.steps}/>
                <SubjectBody />
            </Body>
            </div>
        )
    }
}

export default Subject

