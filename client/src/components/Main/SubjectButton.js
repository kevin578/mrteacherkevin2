import React from "react";
import styled from "styled-components";
import Ranking from "../Ranking";
import { connect } from "react-redux";
import { camelize } from "../App";
import media from "./mediaQueries";


const setMobileButtonWidth = auth => {
  if (auth) {
    return media.bigPhone`width: 100%;`;
  } else {
    return media.bigPhoneLoggedOut`width: 100%;`;
  }
};

const Button = styled.div`
  width: 265px;
  ${props => setMobileButtonWidth(props.auth)}
  height: 230px;
  background-image: ${props => props.background};
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Subject = styled.p`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  font-weight: 300;
  opacity: 0.9;
`;
const Course = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  opacity: 0.9;
`;

const CourseContainer = styled.a`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 15px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  border: white 2px solid;
  padding: 8px;
  border-radius: 5px;
`;

const BadgeWrapper = styled.div`
  width: 50px;
  float: right;
  position: relative;
  bottom: 40px;
  right: 30px;
`;

const goToLink = link => {
  window.location = link;
};

export const removeStarredCourses = courses => {
  return courses.filter(course => {
    if (!(course[0] === "*")) return course;
  });
};

const SubjectButton = props => {
  const getRank = () => {
    if (!(props.rank == null)) {
      return props.rank[camelize(props.subject)];
    }
  };

  const getCoursePercentage = link => {
    if (!props.coursePercentages) return;
    const course = link.slice(1, link.length);
    if (props.coursePercentages.hasOwnProperty(course)) {
      return props.coursePercentages[course];
    }
  };

  const getCourses = () => {
    if (!props.courses) return;
    const courses = removeStarredCourses(props.courses);

    if (courses.length > 0) {
      return props.courses.map((course, index) => {
        const link = `/${props.subject
          .replace(/\s+/g, "")
          .toLowerCase()}${index + 1}`;
        if (course[0] === "*") return;
        return (
          <CourseContainer key={course} href={`${link}?pageNumber=0`}>
            <Course>{course}</Course>
            <Course>{getCoursePercentage(link)}</Course>
          </CourseContainer>
        );
      });
    } else {
      return <Course style={{ marginLeft: 15 }}>Coming soon...</Course>;
    }
  };

  return (
    <Button background={props.background} auth={props.auth}>
      <Subject>{props.subject}</Subject>
      {getCourses()}
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    rank: state.achievements,
    auth: state.auth,
    coursePercentages: state.coursePercentages
  };
};

export default connect(mapStateToProps)(SubjectButton);
