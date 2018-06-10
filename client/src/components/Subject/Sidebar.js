import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import Mindstorms from './../../img/mindstorms.jpg'
import {connect} from 'react-redux';
import * as actions from '../../actions'

const Wrapper = styled.section`
    width: 25%;
    height: 800px;
    background: #D8D8D8;
`


const SidebarSubject = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80px;
    background: #A43AB4;
    text-align: center;
    border-top: 2px solid #979797;
    border-bottom: 1px solid #979797; 
`
const SubjectImage = styled.img`
    opacity: .0;  
    position: absolute;
    left: 2px;
`


const SidebarSubjectName = styled.p`
    color: white;
    margin-top: 30px;
    font-size: 18px;
    font-weight: 600;
    position: relative;
`

class Sidebar extends React.Component {

    changePage = ()=> {
        console.log('asdf')
    }

    getSidebarItems = ()=> {
        return this.props.steps.map((step, index)=> {
            return (
                <SidebarItem 
                    key = {index}
                    index = {index}
                >
                    {index + 1}. {step.props.title}
                </SidebarItem>
            )
        })
    }

    render() {
        return (
            <Wrapper>
                <SidebarSubject>
                    <SubjectImage src = {Mindstorms} />
                    <SidebarSubjectName>{this.props.title}</SidebarSubjectName>
                </SidebarSubject>
                {this.getSidebarItems()}
            </Wrapper>
        )
    }
}

export default connect(null, actions)(Sidebar);