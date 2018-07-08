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
  width: 215px;
  height: 70px;
  overflow: auto;
  background-image: ${props => props.background};
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 25px;
  cursor: pointer;
  position: relative;
  top: 10px;
`;

const Subject = styled.p`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 25px;
`;

const SubjectButton = props => {
  const goToLink = () => {
    window.location = props.destination;
  };

  const getRank = () => {
    if (!(props.rank == null)) {
      return props.rank[camelize(props.subject)];
    }
  };

  return (
    <Wrapper>
      <Button background={props.background} onClick={goToLink}>
        <Subject>{props.subject}</Subject>
      </Button>
      <Ranking rank={getRank()} />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    rank: state.achievements
  };
};

export default connect(mapStateToProps)(SubjectButton);
