import React, { Component } from "react";
import styled from "styled-components";
import * as actions from "../../actions";
import { connect } from "react-redux";
//import { addAcheievement } from '../../reducers/pageReducer';
import axios from "axios";

export const Wrapper = styled.button`
  border: 4px solid #4c6eff;
  background: #4c6eff;
  box-shadow: 0 2px 4px 0 rgba(168, 168, 168, 0.5);
  border-radius: 10px;
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #fff;
  width: 100px;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 10px;
  cursor: pointer;
`;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberWrong: 0,
      checkboxMessage: false,
      buttonText: "",
      allTestsPassed: true
    };
  }

  componentDidMount() {}

  //Once the button is clicked it runs through a cycle of several checks.

  getButton = () => {
    //console.log(this.props.testsCompleted)
    if (this.props.testsCompleted == null) {
      return (
        <Wrapper
          onClick={() => {
            this.checkForNextPage();
          }}
        >
          {this.props.children}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper
          onClick={() => {
            this.runTests();
          }}
        >
          {this.props.testButtonText}
        </Wrapper>
      );
    }
  };

  checkIfCompleted = () => {
    if (this.props.completed == null) return true;
    if (!(this.props.subjectURL in this.props.completed)) return true;
    if (this.props.completed[this.props.subjectURL].includes(this.props.page))
      return false;
    return true;
  };

  // changeScore saves the new score to the database then animates it for the
  // header

  changeScore = newScore => {
    if (this.checkIfCompleted()) {
      axios.put("/api/setScore", {
        score: newScore + this.props.score
      });
      const timer = () => {
        const changeValue = newScore > 0 ? 1 : -1;

        for (let i = 0; i < Math.abs(newScore); i++) {
          setTimeout(() => {
            this.props.changeScore(changeValue);
          }, i * 70);
        }
      };
      timer();
    }
  };

  runTests = () => {
    axios.post("/api/testCode", {
      tests: this.props.test
    });
  };

  //If everything is ready, this switches to the next page

  checkForNextPage = () => {
    if (Object.keys(this.props.correct).length) {
      this.checkQuiz();
    }
    this.setState({ checkboxMessage: this.props.remainingCheckboxes > 0 });
    if (
      this.checkQuiz() === 0 &&
      this.props.remainingCheckboxes === 0 &&
      (this.props.testsCompleted === true || this.props.testsCompleted === null)
    ) {
      this.nextPage();
    }
  };

  nextPage = () => {
    if (this.props.auth) this.changeScore(this.props.changeScoreValue);
    this.props.completeButton(this.props.pageKey, this.props.subjectURL);
    this.props.setPage(this.props.page + 1);
    this.props.resetAnswers();
    window.scrollTo(0, 0);
    if (this.props.badge) {
      this.props.addAchievemnet(this.props.badge, this.props.subject);
    }
  };

  checkQuiz = () => {
    let matchArray = [];
    for (let item in this.props.correct) {
      if (this.props.correct[item] == null) {
        matchArray.push(item);
      }
    }
    this.setState({ numberWrong: matchArray.length });
    return matchArray.length;
  };

  render() {
    return (
      <div>
        {this.getButton()}
        {this.state.numberWrong > 0 && (
          <p>You still have {this.state.numberWrong} wrong.</p>
        )}
        {this.state.checkboxMessage && (
          <p>You have not completed all the requirements</p>
        )}
      </div>
    );
  }
}

Button.defaultProps = {
  changeScoreValue: 5,
  testButtonText: "Test"
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    page: state.page,
    pageKey: state.pageKey,
    subjectURL: state.subjectURL,
    subject: state.subject,
    completed: state.completed,
    score: state.score,
    correct: state.correct,
    remainingCheckboxes: state.remainingCheckboxes,
    test: state.tests,
    testsCompleted: state.allTestsCompleted
  };
}

export default connect(
  mapStateToProps,
  actions
)(Button);
