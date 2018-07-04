import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import camelCase from 'camelcase';

const AnswerArea = styled.input `
  
  `
const QuestionText = styled.h2 `

  `

const MultipleChoiceLabel = styled.p `
    display: inline-block;
    margin: 0px 0px 10px 20px;
  `

class TextQuestion extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this
      .props
      .checkAnswers(null, camelCase(this.props.correctAnswer))
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({value: event.target.value});
    if (event.target.value == this.props.correctAnswer) {
      this
        .props
        .checkAnswers('matched', camelCase(this.props.correctAnswer));
    } else {
      this
        .props
        .checkAnswers(null, camelCase(this.props.correctAnswer));
    }
  }

  getMultipleChoices = () => {

    return this
      .props
      .choices
      .map((choice) => {
        return (
          <div key={choice}>
            <input
              type='radio'
              name="mcQuestionChoice"
              value={choice}
              onChange={this.handleChange}/>
            <MultipleChoiceLabel>{choice}</MultipleChoiceLabel>
          </div>
        )
      })
  }

  getQuestionType = () => {
    switch (this.props.type) {
      case 'text':
        return (
          <div key={this.props.children}>
            <QuestionText>{this.props.children}</QuestionText>
            <AnswerArea value={this.state.value} onChange={this.handleChange} type='text'/>
          </div>
        )
      case 'mc':
        return (
          <div>
            <QuestionText>{this.props.children}</QuestionText>
            {this.getMultipleChoices()}
          </div>
        )

    }

  }

  render() {
    return (
      <div key={this.props.correctAnswer}>
        {this.getQuestionType()}
      </div>

    )
  }
}

TextQuestion.defaultProps = {
  type: 'text',
  correctAnswer: ''
}

export default connect(null, actions)(TextQuestion)
