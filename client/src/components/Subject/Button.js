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

  componentDidMount() {

  }

  checkIfCompleted = ()=> {
    
    if (this.props.completed == null) return true;
    if (this.props.completed[this.props.subjectURL].includes(this.props.page)) return false;
    return true;
  }

  changeScore = ()=> {
    

    if (this.checkIfCompleted()) {
      axios.put('/api/setScore',{
      score: this.props.changeScoreValue + this.props.score
      })
      const timer = ()=> {
        for (let i = 0; i < this.props.changeScoreValue; i++) {
          setTimeout(()=> { this.props.changeScore(1)}, i * 70)
        }
      };
      timer();
    }

  }

  buttonClick = () => {  
    if (this.props.auth) this.changeScore();
    
    this.props.completeButton(this.props.page, this.props.subjectURL, this.props.completed)
    
    this.props.setPage(this.props.page + 1);
    
    window.scrollTo(0, 0);

    

    if (this.props.badge) {
      this.props.addAchievemnet(this.props.badge, this.props.subject);
    }
    

    
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
      score: state.score
    } 
}

export default connect(mapStateToProps, actions)(Button)