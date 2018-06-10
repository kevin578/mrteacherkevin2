import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    height: 800px;
    width: 75%;
`

const vidHeight = 350;
const vidWidth = vidHeight * 1.4375;

export const Video = (props)=> {
    return (
        <iframe width={vidWidth} height={vidHeight} src = {props.src} title = "video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    )
}

export const Header = styled.h1`
    font-size: 28px;
    margin-top: 50px;
` 

export const Button = styled.button`
    border: 4px solid #4C6EFF;
    box-shadow: 0 2px 4px 0 rgba(168,168,168,0.50);
    border-radius: 20px;
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #1A1A1A;
    width: 125px;
    height: 55px;
    margin-top: 30px;
    cursor: pointer;
` 





export const Body = (props)=> {
        return (
            <Wrapper>
                {props.children}
            </Wrapper>
        )
    }
