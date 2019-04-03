import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import Mindstorms from "./../../img/mindstorms.jpg";
import { connect } from "react-redux";
import * as actions from "../../state/actions";
import { headerHeight } from "../Header";
import Ranking from "../Ranking";
import courses from "../Pages/courses.json";

import axios from "axios";
import media from "./mediaQueries";

const Wrapper = styled.section`
  width: 340px;
  height: 100%;
  background: #d8d8d8;
  margin-top: ${headerHeight}px;
  position: fixed;
  overflow: auto;
  ${media.tablet`display: none;`}
`;

const SidebarSubject = styled.div`
  position: fixed;
  width: 340px;
  height: 80px;
  background: #a43ab4;
  text-align: center;
  border-top: 2px solid #979797;
  border-bottom: 1px solid #979797;
`;
const SubjectImage = styled.img`
  opacity: 0;
  position: absolute;
  left: 2px;
`;

const SidebarSubjectName = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  right: 20px;
`;

const SidebarItemContainer = styled.div`
  margin-top: 80px;
  padding-bottom: 100px;
`;

const SidebarCourseName = styled.p`
  color: white;
  margin-top: 0px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  right: 20px;
  bottom: 10px;
  font-style: italic;
`;

class Sidebar extends React.Component {
  componentDidMount(){
    this.props.setSubjectPageLength(this.props.steps.length);
  }
  componentDidUpdate() {
    const { subjectURL, steps } = this.props;
    const stepCopy = steps.filter(item => {
      return this.getColor(item.key);
    });
    const percentage = parseInt((stepCopy.length / steps.length) * 100) + "%";
    if (percentage != "0%") {
      axios.put("/api/setCoursePercentage", { subjectURL, percentage });
    }
  }

  getRank = () => {
    if (this.props.achievements) {
      return this.props.achievements[this.props.subjectName];
    } else return [];
  };

  getColor = index => {
    const subject = this.props.subject;
    const completed = this.props.completed;
    if (!subject || !completed) {
      return false;
    }

    if (!completed[subject]) {
      return false;
    }

    if (completed[subject].includes(index)) {
      return true;
    }
  };

  getSidebarItems = () => {
    return this.props.steps.map((step, index) => {
      return (
        <SidebarItem
          key={step.key}
          index={index}
          completed={this.getColor(step.key)}
          stars={step.props.stars}
        >
          {index + 1}. {step.props.title}
        </SidebarItem>
      );
    });
  };

  getSubjectNumber() {
    if (this.props.subject) return this.props.subject.slice(-1);
  }

  getCourseTitle() {
    if (!this.props.subject) return;
    for (let course of courses) {
      if (course.subject == this.props.title) {
        const courseArrayIndex = parseInt(this.props.subject.slice(-1));
        const title = course.courses[courseArrayIndex - 1];
        this.props.setCourseTitle(title);
        return title;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <SidebarSubject>
          <SidebarSubjectName>
            {this.props.title} {this.getSubjectNumber()}
          </SidebarSubjectName>
          <SidebarCourseName>{this.getCourseTitle()}</SidebarCourseName>
        </SidebarSubject>
        <SidebarItemContainer>{this.getSidebarItems()}</SidebarItemContainer>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    completed: state.completed,
    subject: state.subjectURL,
    subjectName: state.subject,
    achievements: state.achievements,
    subjectURL: state.subjectURL,
    page: state.page
  };
}

export default connect(
  mapStateToProps,
  actions
)(Sidebar);
