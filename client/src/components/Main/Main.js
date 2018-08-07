import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton from "./SubjectButton";
import Axios from "../../../node_modules/axios";
import { connect } from "react-redux";
import * as actions from "../../actions";
import courses from "../Pages/courses.json";

const Body = styled.div`
`;

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

class Main extends React.Component {
  componentDidMount() {
    Axios.get("/api/getCoursePercentages").then(percentages => {
      this.props.setCoursePercentagesForRedux(percentages.data);
    });
  }

  getSubjects() {
    if (!this.props.coursePercentages) return;
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
      //console.log(startedSubjects)
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

      const sortedCourses = 
      startedSubjects.concat(notStartedSubjects);
      
      return sortedCourses.map(subject => {
        return (
          <SubjectButton
            background={subject.background}
            subject={subject.subject}
            courses = {subject.courses}
            key = {subject.subject.replace(/\s+/g, "").toLowerCase()}
          />
        );
      });
    }
  

  render() {
    return (
      <Body>
        <Header />
        <Subjects>{this.getSubjects()}</Subjects>
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
