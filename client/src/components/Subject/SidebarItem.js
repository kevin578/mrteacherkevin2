import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #979797;
    overflow: auto;
    cursor: pointer;
    background: ${props => props.completed? '#5BA84C':'transparent'};
    color: ${props => props.completed? '#fff': 'default'};
`

const ItemName = styled.p`
    margin-left: 15px;

`


class SidebarItem extends React.Component {

    click = ()=> {
        this.props.setPage(this.props.index);
    }

    render() {
        return (
            <Wrapper onClick = {this.click} completed = {this.props.completed}>
                <ItemName>{this.props.children}</ItemName>
            </Wrapper>
        )
    }
}



export default connect(null, actions)(SidebarItem);