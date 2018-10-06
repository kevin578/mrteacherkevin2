import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
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
      isValidProjectURL: null,
      isValidProjectTitle: null,
      buttonText: "",
      allTestsPassed: true
    };
  }

  componentDidMount() {}

  //Once the button is clicked it runs through a cycle of several checks.

  getButton = () => {
    switch (this.props.type) {
      case "test":
        return (
          <Wrapper
            onClick={() => {
              this.runTests();
            }}
          >
            {this.props.testButtonText}
          </Wrapper>
        );
      default:
        return (
          <Wrapper
            onClick={() => {
              this.checkForNextPage();
            }}
          >
            {this.props.children}
          </Wrapper>
        );
    }
  };

  checkIfCompleted = () => {
    if (this.props.completed == null) return false;
    if (!(this.props.subjectURL in this.props.completed)) return false;
    if (
      this.props.completed[this.props.subjectURL].includes(this.props.pageKey)
    )
      return true;
    return false;
  };

  // changeScore saves the new score to the database then animates it for the
  // header

  changeScore = newScore => {
    if (!this.checkIfCompleted()) {
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

  projectSubmissionFormComplete() {
    const { isProjectSubmissionPage } = this.props.projectSubmission;
    if (!this.state.isValidProjectURL && isProjectSubmissionPage) return false;
    if (!this.state.isValidProjectTitle && isProjectSubmissionPage)
      return false;
    return true;
  }

  checkForNextPage = () => {
    this.validateURL();
    this.validateTitle();
    if (Object.keys(this.props.correct).length) {
      this.checkQuiz();
    }
    this.setState({
      checkboxMessage: this.props.remainingCheckboxes > 0
    });
    if (!this.projectSubmissionFormComplete()) return;
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
    if (this.props.badge) {
      this.props.addAchievemnet(this.props.badge, this.props.subject);
    }
    if (this.props.projectSubmission.isProjectSubmissionPage) {
      axios.post("/api/addProject", {
        projectURL: this.props.projectSubmission.projectURL,
        projectTitle: this.props.projectSubmission.projectTitle,
        projectKey: this.props.projectSubmission.projectKey,
        subjectURL: this.props.subjectURL,
        subject: this.props.subject,
        course: this.props.pageInfo.courseTitle
      });
    }
    if (this.props.page + 1 === this.props.pageInfo.subjectPageLength) {
      window.location = "/";
      this.props.setPage(0);
    } else {
      // window.location = `${this.props.subjectURL}?pageNumber=${parseInt(
      //   this.props.page
      // ) + 1}`;
      this.props.history.push(`${this.props.subjectURL}?pageNumber=${parseInt(
        this.props.page
      ) + 1}`);
      //this.props.setPage(this.props.page + 1);
    }
    window.scrollTo(0, 0);
    this.props.resetAnswers();
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

  validateURL() {
    if (this.state.isValidProjectURL) return;
    else if (this.props.projectSubmission.projectURL.length < 8) {
      this.setState({ isValidProjectURL: false });
    } else {
      this.setState({ isValidProjectURL: true }, this.checkForNextPage);
    }
  }

  validateTitle() {
    if (this.state.isValidProjectTitle) return;
    else if (this.props.projectSubmission.projectTitle) {
      this.setState({ isValidProjectTitle: true }, this.checkForNextPage);
    } else {
      this.setState({ isValidProjectTitle: false });
    }
  }

  render() {
    return (
      <div>
        {this.getButton()}
        {this.state.numberWrong > 0 && (
          <p>You still have {this.state.numberWrong} wrong.</p>
        )}
        {this.state.checkboxMessage && (
          <p>You have not completed all the requirements.</p>
        )}
        {this.state.isValidProjectURL === false &&
          this.props.projectSubmission.isProjectSubmissionPage && (
            <p>Please enter a valid URL.</p>
          )}
        {this.state.isValidProjectTitle === false &&
          this.props.projectSubmission.isProjectSubmissionPage && (
            <p>Your project does not have a title.</p>
          )}
      </div>
    );
  }
}

Button.defaultProps = {
  changeScoreValue: 5,
  testButtonText: "Test",
  children: "Next",
  type: "default"
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
    testsCompleted: state.allTestsCompleted,
    projectSubmission: state.projectSubmission,
    pageInfo: state.pageInfo
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Button)
);
