import React from 'react';
import styled from 'styled-components';
import image from './../img/logo2.png';
import { connect } from 'react-redux';

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
    cursor: pointer;
    text-decoration: none;
`


class Header extends React.Component {
    
    getHeaderContent = ()=> {
        if (this.props.auth == null) {
            return
        }
        else if (this.props.auth)  {
            return (
                <HeaderLinks>
                    <HeaderLink>00015 - L1</HeaderLink>
                    <HeaderLink>Profile</HeaderLink>
                    <HeaderLink href = '/api/logout'>Logout</HeaderLink>
                </HeaderLinks>
            )

        }
        else {
            return (
                <HeaderLinks>
                    <HeaderLink href = '/auth/google'>Login with Google</HeaderLink>
                </HeaderLinks>
            )
        }
        
    }

    render(){
        return (
            <Wrapper>
                <Logo src = {image} />
                {this.getHeaderContent()}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        auth: state.auth}
}

export default connect(mapStateToProps)(Header)