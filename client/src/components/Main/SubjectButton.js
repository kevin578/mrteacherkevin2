import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    width: 215px;
    height: 70px;
    overflow: auto;
    background-image: ${props=> props.background};
    border-radius: 8px;
    margin-bottom: 20px;
`

const Subject = styled.p`
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 25px;
`


const SubjectButton = (props)=> {
    return (
        <Wrapper background = {props.background}>
            <Subject>{props.subject}</Subject>
        </Wrapper>
    )
}

export default SubjectButton;