import React from "react";
import styled from "styled-components";
import Ranking from "../Ranking";
import { connect } from "react-redux";
import { camelize } from "../App";

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: relative;
  width: 315px;
  height: 170px;
  overflow: auto;
  background-image: ${props => props.background};
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 25px;
  position: relative;
  top: 10px;
`;

const Subject = styled.p`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;
const Course = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const CourseContainer = styled.a`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 15px;
  width: 55%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
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

const SubjectButton = props => {
  const getRank = () => {
    if (!(props.rank == null)) {
      return props.rank[camelize(props.subject)];
    }
  };

  const getCoursePercentage = () => {
    if (props.auth) {
    }
  };

  const getCourses = () => {
    return props.courses.map((course, index) => {
      const link = props.destination + parseInt(index + 1);
      return (
        <CourseContainer
          key={course}
          href = {link}
        >
          <Course>{course}</Course>
          <Course>{getCoursePercentage()}</Course>
        </CourseContainer>
      );
    });
  };

  return (
    <Wrapper>
      <Button background={props.background} onClick={goToLink}>
        <Subject>{props.subject}</Subject>
        {getCourses()}
        <BadgeWrapper>
          <Ranking rank={getRank()} />
        </BadgeWrapper>
      </Button>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    rank: state.achievements,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(SubjectButton);
