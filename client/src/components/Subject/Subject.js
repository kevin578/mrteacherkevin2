import React from 'react';
import styled from 'styled-components';
import Header from './../Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';


const Body = styled.div`
    display: flex;
`

const Content = styled.div`
    margin-top: 10px;
    margin-left: 100px;
    width: 60%;
` 

class Subject extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div>
            <Header />
            <Body>
                <Sidebar 
                    title = {this.props.title}
                    steps = {this.props.children}
                />
                <Content>
                    {this.props.children[this.props.page]}
                </Content>
            </Body>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        page: state.page   
    } 
}

export default connect(mapStateToProps)(Subject)

