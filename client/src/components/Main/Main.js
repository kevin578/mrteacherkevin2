import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton from "./SubjectButton";
import Axios from "../../../node_modules/axios";
import { connect } from "react-redux";
import * as actions from "../../actions";
import courses from "../Pages/courses.json";
import { SyncLoader } from "halogenium";

const Body = styled.div``;

const Subjects = styled.div`
  width: 1125px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: 
  position: relative;
  right: 10px;
`;

const LoaderWrapper = styled.div`
  margin-top: 150px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

class Main extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    Axios.get("/api/getCoursePercentages").then(percentages => {
      this.setState({ isLoading: false });
      this.props.setCoursePercentagesForRedux(percentages.data);
    });
  }

  getSubjects() {
    if (!this.props.coursePercentages === null) return;
    let subjectPercentArray = [];
    for (let subject in this.props.coursePercentages) {
      subjectPercentArray.push(subject.slice(0, -1));
    }

    let startedSubjects = [];
    let notStartedSubjects = [];
    for (let course of courses) {
      if (
        subjectPercentArray.indexOf(
          course.subject.replace(/\s+/g, "").toLowerCase()
        ) > -1
      ) {
        startedSubjects.push(course);
      } else {
        notStartedSubjects.push(course);
      }
    }
    this.props.addStartedSubjects(startedSubjects);
    startedSubjects.sort(function(a, b) {
      if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
      if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
      return 0;
    });
    notStartedSubjects.sort(function(a, b) {
      if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
      if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
      return 0;
    });

    const sortedCourses = startedSubjects.concat(notStartedSubjects);

    return sortedCourses.map(subject => {
      return (
        <SubjectButton
          background={subject.background}
          subject={subject.subject}
          courses={subject.courses}
          key={subject.subject.replace(/\s+/g, "").toLowerCase()}
        />
      );
    });
  }

  render() {
    return (
      <Body>
        <Header />
        {this.state.isLoading && (
          <LoaderWrapper>
            <SyncLoader color="#345afb" size="16px" margin="4px" />
          </LoaderWrapper>
        )}
        {!this.state.isLoading && <Subjects>{this.getSubjects()}</Subjects>}
      </Body>
    );
  }
}

const mapStateToProps = state => {
  return {
    coursePercentages: state.coursePercentages
  };
};

export default connect(
  mapStateToProps,
  actions
)(Main);
