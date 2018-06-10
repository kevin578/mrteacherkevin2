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
                <Sidebar 
                    title = {this.props.title}
                    steps = {this.props.steps}
                />
            {this.props.children}
            </Body>
            </div>
        )
    }
}

export default Subject

