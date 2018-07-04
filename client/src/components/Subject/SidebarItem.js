import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../actions";
import greyStar from "../../img/greyStar.svg";
import yellowStar from "../../img/yellowStar.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${props => (props.completed ? "#D8D8D8" : "#979797")};
  overflow: auto;
  cursor: pointer;
  background: ${props => (props.completed ? "#5BA84C" : "transparent")};
  color: ${props => (props.completed ? "#fff" : "default")};
  transition: 0.5s all;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.p`
  margin-left: 15px;
  margin-right: 10px;
`;

const Star = styled.img`
  margin-left: 7px;
`;

const StarArea = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100px;
`;

class SidebarItem extends React.Component {
  click = () => {
    this.props.resetAnswers();
    this.props.setPage(this.props.index);
  };

  getStars = () => {
    if (!this.props.stars) return;
    const star = this.props.completed ? yellowStar : greyStar;
    let starArray = [];
    for (let i = 0; i < this.props.stars; i++) {
      starArray.push(<Star key={i} src={star} />);
    }
    return starArray;
  };

  render() {
    return (
      <Wrapper onClick={this.click} completed={this.props.completed}>
        <ItemName>{this.props.children}</ItemName>
        <StarArea>{this.getStars()}</StarArea>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  actions
)(SidebarItem);
