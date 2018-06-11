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



export const Body = (props)=> {
        return (
            <Wrapper>
                {props.children}
            </Wrapper>
        )
    }
