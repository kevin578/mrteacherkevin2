import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../../actions';
import { connect } from 'react-redux';

export const Wrapper = styled.button`
    border: 4px solid #4C6EFF;
    background: #4C6EFF;
    box-shadow: 0 2px 4px 0 rgba(168,168,168,0.50);
    border-radius: 10px;
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #fff;
    width: 100px;
    height: 40px;
    margin-top: 50px;
    cursor: pointer;
` 


class Button extends Component {

  buttonClick = ()=> {
    this.props.completeButton(this.props.page, this.props.subject)
    this.props.setPage(this.props.page + 1);
  }

  render() {
    return (
      <div>
          <Wrapper 
          onClick = {()=> this.buttonClick()}
          >
          {this.props.children}
          </Wrapper>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      page: state.page,
      subject: state.subject
    } 
}

export default connect(mapStateToProps, actions)(Button)