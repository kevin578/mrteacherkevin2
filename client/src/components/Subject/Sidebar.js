import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 25%;
    height: 800px;
    background: #D8D8D8;

`


const SidebarSubject = styled.div`
    overflow: auto;
    width: 100%;
    height: 80px;
    background: #A43AB4;
    text-align: center;
`

const SidebarSubjectName = styled.p`
    color: white;
    margin-top: 30px;
    font-size: 18px;
    font-weight: 600;

`

class Sidebar extends React.Component {
    render() {
        return (
            <Wrapper>
                <SidebarSubject>
                    <SidebarSubjectName>Lego Mindstorms</SidebarSubjectName>
                </SidebarSubject>
            </Wrapper>
        )
    }
}

export default Sidebar;