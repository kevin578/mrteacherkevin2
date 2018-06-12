import React from 'react';
import styled from 'styled-components';
import Header from './../Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {headerHeight} from '../Header'
import camelCase from 'camelcase';


const Body = styled.div`
    display: flex;

`

const Content = styled.div`
    margin-top: 10px;
    margin-left: 430px;
    width: 60%;
    margin-top: ${headerHeight}px;
` 

class Subject extends React.Component {

    componentDidMount(){
        this.props.setSubjectURL(this.props.urlName)
        this.props.setSubject(camelCase(this.props.title))
    }

    render(){
        return (
            <div>
            <Header />
            <Body>
                <Sidebar 
                    title = {this.props.title}
                    steps = {this.props.children}
                    subject = {this.props.urlName}
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

export default connect(mapStateToProps, actions)(Subject)

