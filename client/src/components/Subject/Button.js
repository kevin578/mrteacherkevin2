import React, { Component } from 'react';
import styled from 'styled-components';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addAcheievement } from '../../reducers/pageReducer';
import axios from 'axios';


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

  constructor(props) {
    super(props);
    this.state = {
      numberWrong: 0
    }
  }

  componentDidMount() {

  }

  checkIfCompleted = ()=> { 
    if (this.props.completed == null) return true;
    if (!(this.props.subjectURL in this.props.completed)) return true;
   
    if (this.props.completed[this.props.subjectURL].includes(this.props.page)) return false;
    return true;
  }

  changeScore = (newScore)=> {
    
    if (this.checkIfCompleted()) {
      axios.put('/api/setScore',{
      score: newScore + this.props.score
    })
      const timer = ()=> {
        const changeValue = newScore > 0 ? 1:-1;

        for (let i = 0; i < Math.abs(newScore); i++) {
          setTimeout(()=> { this.props.changeScore(changeValue) }, i * 70)
        }
      };
      timer();
    }

  }

  nextPage = () => {  

    if (this.props.auth) this.changeScore(this.props.changeScoreValue);
    this.props.completeButton(this.props.page, this.props.subjectURL, this.props.completed)
    this.props.setPage(this.props.page + 1);
    window.scrollTo(0, 0);
    if (this.props.badge) {
      this.props.addAchievemnet(this.props.badge, this.props.subject);
    }
  }

  checkQuiz = () => {
    let matchArray = []
    for (let item in this.props.correct) {
      if (this.props.correct[item] == null) {
        matchArray.push(item);
      }
    }
    if (matchArray.length > 0) {
      this.setState({numberWrong: matchArray.length})
    }
    else {
      this.nextPage();
    }
  }


  render() {
    return (
      <div>
          <Wrapper 
          onClick = {()=> {
            return this.props.quiz ? this.checkQuiz() : this.nextPage()
          }}
         
         >
          {this.props.children}
          </Wrapper>
          {this.state.numberWrong > 0 && 
          <p>You still have {this.state.numberWrong} wrong</p>
          }
      </div>
    )
  }
}

Button.defaultProps = {
  changeScoreValue: 5
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
      page: state.page,
      subjectURL: state.subjectURL,
      subject: state.subject,
      completed: state.completed,
      score: state.score,
      correct: state.correct
    } 
}

export default connect(mapStateToProps, actions)(Button)