import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import camelCase from 'camelcase';
  
  const AnswerArea = styled.input`
  
  `
  const QuestionText = styled.h2`

  `


class TextQuestion extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
          value: ''
    }
  }


  
  componentDidMount(){
    this.props.checkAnswers(null, camelCase(this.props.correctAnswer))
  }

  handleChange = (event)=> {
    this.setState({value: event.target.value});
    if (event.target.value == this.props.correctAnswer)   {
        this.props.checkAnswers('matched', camelCase(this.props.correctAnswer));
    } 
    else {
        this.props.checkAnswers(null, camelCase(this.props.correctAnswer));
    }

  }

  render() {
    return (
    <div>
      { this.props.type == 'text' &&
        <div>
        <QuestionText>{this.props.children}</QuestionText>
        <AnswerArea value={this.state.value} onChange={this.handleChange} type = 'text'/>
        </div>
      }
    </div>

      
    )
  }
}

TextQuestion.defaultProps = {
    type: 'text'
}

export default connect(null, actions)(TextQuestion)
