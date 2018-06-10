import React from 'react';
import styled from  'styled-components';
import logo from './../../img/logo2.png';
import SignIn from './SignIn';
import OauthButton from './OauthButton'

const Wrapper = styled.section`
    background: #59e3ff;
    height: 600px;
`
const Logo = styled.img`
    width: 600px;
    margin-top: 30px;
    margin-left: 40px;
`

class Login extends React.Component {


    render() {
        return (
            <Wrapper>
                <Logo src = {logo} />
                <OauthButton logo = {GoogleLogo} text = "Continue with Google"/>
            </Wrapper>
        )
    }

}

export default Login;