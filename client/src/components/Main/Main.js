import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton, { removeStarredCourses } from "./SubjectButton";
import Axios from "../../../node_modules/axios";
import { connect } from "react-redux";
import * as actions from "../../actions";
import courses from "../Pages/courses.json";
import { SyncLoader } from "halogenium";

const Body = styled.div``;

const SubjectContainer = styled.div`
  width: 1125px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

const Subjects = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  right: 10px;
`;

const StartedSubjects = styled(Subjects)`
  padding-bottom: 40px;
  border-bottom: 3px #c1c1c1 solid;
  margin-bottom: 60px;
`;

const ComingSoonSubjects = styled(Subjects)`
  padding-top: 40px;
  border-top: 3px #c1c1c1 solid;
  margin-top: 60px;
`;

const SubjectTitle = styled.h1`
  font-size: 28px;
  opacity: 0.9;
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
      this.sortSubjects();
    });
  }

  sortSubjects() {
    if (!this.props.coursePercentages === null) return;
    let subjectPercentArray = [];
    for (let subject in this.props.coursePercentages) {
      subjectPercentArray.push(subject.slice(0, -1));
    }

    let startedSubjects = [];
    let notStartedAndComingSoon = [];
    let notStartedSubjects = [];
    let comingSoonSubjects = [];

    for (let course of courses) {
      if (
        subjectPercentArray.indexOf(
          course.subject.replace(/\s+/g, "").toLowerCase()
        ) > -1
      ) {
        startedSubjects.push(course);
      } else {
        notStartedAndComingSoon.push(course);
      }
    }

    this.props.addStartedSubjects(startedSubjects);

    notStartedAndComingSoon.forEach(subject => {
      const courses = removeStarredCourses(subject.courses);
      if (courses.length > 0) {
        notStartedSubjects.push(subject);
      } else {
        comingSoonSubjects.push(subject);
      }
    });

    this.props.addNotStartedSubjects(notStartedSubjects);
    this.props.addComingSoonSubjects(comingSoonSubjects);

    const sortedCourses = startedSubjects.concat(notStartedSubjects);
  }

  getSubjects(subjectArray) {
    return subjectArray.map(subject => {
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

  // renderSubjects(subjectArray , message) {
  //   if (subjectArray.length > 0) {
  //     <div>
  //     <SubjectHeader>{message}</SubjectHeader>
  //     <Subjects>{this.getSubjects(subjectArray)}</Subjects>
  //     </div>
  //   }
  // }

  render() {
    return (
      <Body>
        <Header />
        {this.state.isLoading && (
          <LoaderWrapper>
            <SyncLoader color="#345afb" size="16px" margin="4px" />
          </LoaderWrapper>
        )}
        {!this.state.isLoading && (
          <SubjectContainer>
            {this.props.mainPage.startedSubjects.length > 0 && (
              <div>
                <SubjectTitle>Continue with:</SubjectTitle>
                <StartedSubjects>
                  {this.getSubjects(this.props.mainPage.startedSubjects)}
                </StartedSubjects>
              </div>
            )}

            <Subjects>
              {this.getSubjects(this.props.mainPage.notStartedSubjects)}
            </Subjects>

            {/* <ComingSoonSubjects>
              {this.getSubjects(this.props.mainPage.comingSoonSubjects)}
            </ComingSoonSubjects> */}
          </SubjectContainer>
        )}
      </Body>
    );
  }
}

const mapStateToProps = state => {
  return {
    coursePercentages: state.coursePercentages,
    mainPage: state.mainPage
  };
};

export default connect(
  mapStateToProps,
  actions
)(Main);
