import React from 'react';
import styled from 'styled-components';
import Header from './../Header'
import SubjectButton from './SubjectButton'


const Engineering = styled.div`
    margin-top: 100px;
    margin-left: 120px;
    width: 215px;
`

const EngineeringTitle = styled.h1`
    text-align: center;
    font-family: Roboto;

`

class Main extends React.Component {
    render(){
        return (
            <div>
            <Header />
            <Engineering>
                <EngineeringTitle>Engineering</EngineeringTitle>
                <SubjectButton 
                    background = 'linear-gradient(45deg, #75D39C 0%, #22D3BE 100%)'
                    subject = 'Lego Mindstorms'
                />    
                <SubjectButton 
                    background = 'linear-gradient(45deg, #D3C075 0%, #D37722 100%)'
                    subject = 'Kerbal Space Program'
                />
            </Engineering>

            </div>


        )
    }

}

export default Main;