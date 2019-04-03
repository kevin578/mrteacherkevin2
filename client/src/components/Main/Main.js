import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton, { removeStarredCourses } from "./SubjectButton";
import Axios from "../../../node_modules/axios";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {setCoursePercentagesForRedux, addStartedSubjects, addNotStartedSubjects } from "../../state/actions";
import courses from "../Pages/courses.json";
import { SyncLoader } from "halogenium";
import Sidebar from "./Sidebar";
import media, { bigMedia } from "./mediaQueries";

const Body = styled.div``;

const Content = styled.div`
  display: flex;
`;

const ContentLoggedOut = styled(Content)``;

const SubjectContainer = styled.div`
  width: "80%";
  margin-top: 100px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto;
  ${media.smallLaptop`margin-left: 5%;`};
  ${media.bigPhone`width: 90%;`};
  ${bigMedia.desktop`margin-left: 75px;`}
`;

const SubjectContainerLoggedOut = styled(SubjectContainer)`
  width: 1120px;
  ${media.smallLaptopLoggedOut`width: 840px;`}
  ${media.tabletLoggedOut`width: 555px;`}
  ${media.bigPhoneLoggedOut`width: 90%;`}
`;

const Subjects = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 285px 285px 285px;
  ${media.smallLaptop`grid-template-columns: 285px 285px;`};
  ${media.bigPhone`grid-template-columns: 100%;`};
  ${bigMedia.desktop`grid-template-columns: 285px 285px 285px 285px`};
  ${bigMedia.bigDesktop`grid-template-columns: 285px 285px 285px 285px 285px`};

`;

const SubjectsLoggedOut = styled(Subjects)`
  grid-template-columns: 285px 285px 285px 285px;
  ${media.smallLaptopLoggedOut`grid-template-columns: 285px 285px 285px;`}
  ${media.tabletLoggedOut`grid-template-columns: 285px 285px;`}
  ${media.bigPhoneLoggedOut`grid-template-columns: 100%;`}
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
    if (!this.props.renderProjects) {
      Axios.get("/api/getCoursePercentages").then(percentages => {
        this.setState({ isLoading: false });
        this.props.setCoursePercentagesForRedux(percentages.data);
        this.sortSubjects();
      });
    } else {
      this.setState({ isLoading: this.props.isLoading });
    }
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

    const sortedCourses = startedSubjects.concat(notStartedSubjects);
  }

  getSubjects(subjectArray) {
    return subjectArray.map(subject => {
      return (
        <SubjectButton
          background={subject.background}
          subject={subject.subject}
          subjectURL={subject.subjectURL}
          courses={subject.courses}
          key={subject.subject.replace(/\s+/g, "").toLowerCase()}
        />
      );
    });
  }

  getContent() {
    if (this.props.renderProjects) {
      return this.props.renderProjects;
    } else {
      return this.getSubjects(this.props.mainPage.notStartedSubjects);
    }
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
        {/* Loading */}
        {this.state.isLoading && (
          <LoaderWrapper>
            <SyncLoader color="#345afb" size="16px" margin="4px" />
          </LoaderWrapper>
        )}

        {/* Not Loading and Not Logged In */}

        {!this.state.isLoading &&
          !this.props.auth && (
            <Content>
              <SubjectContainerLoggedOut>
                <SubjectsLoggedOut>{this.getContent()}</SubjectsLoggedOut>
              </SubjectContainerLoggedOut>
            </Content>
          )}

        {/* Not Loading && Logged In*/}

        {!this.state.isLoading &&
          this.props.auth && (
            <Content>
              {this.props.auth && <Sidebar />}
              <SubjectContainer auth={this.props.auth}>
                {this.props.mainPage.startedSubjects.length > 0 &&
                  !this.props.renderProjects && (
                    <div>
                      <SubjectTitle>Continue with:</SubjectTitle>
                      <StartedSubjects>
                        {this.getSubjects(this.props.mainPage.startedSubjects)}
                      </StartedSubjects>
                    </div>
                  )}

                <Subjects>{this.getContent()}</Subjects>
              </SubjectContainer>
            </Content>
          )}
      </Body>
    );
  }
}

const mapStateToProps = state => {
  return {
    coursePercentages: state.coursePercentages,
    mainPage: state.mainPage,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {setCoursePercentagesForRedux, addStartedSubjects, addNotStartedSubjects  }
)(Main);
