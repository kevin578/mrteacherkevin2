import React from 'react';
import styled from 'styled-components';
import image from './../img/logo2.png';

const headerHeight = 60
const imgHeight = headerHeight - 20;

const Wrapper = styled.section`
     background: blue;
     height: ${headerHeight}px;
     width: 100%;  
     background: #345AFB; 
     display: flex;


`

const Logo = styled.img`
    margin-top: ${(headerHeight - imgHeight)/2}px;
    height: ${imgHeight}px;
    margin-left: 32px;
`

const HeaderLinks = styled.div`
    margin-left: 50%;
    display: flex;

`

const HeaderLink = styled.a`
    margin-right: 40px;
    display: block;
    margin-top: ${headerHeight/2}px;
    transform:translateY(-20%);
    color: #fff;
    font-weight: 600;


`


class Header extends React.Component {
    


    render(){
        return (
            <Wrapper>
                <Logo src = {image} />
                <HeaderLinks>
                    <HeaderLink>00015 - L1</HeaderLink>
                    <HeaderLink>Profile</HeaderLink>
                    <HeaderLink>Logout</HeaderLink>
                </HeaderLinks>
            </Wrapper>
        )
    }
}

export default Header