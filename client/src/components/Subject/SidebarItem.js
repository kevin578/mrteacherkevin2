import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import { connect } from "react-redux";
import * as actions from "../../actions";
import greyStar from "../../img/greyStar.svg";
import yellowStar from "../../img/yellowStar.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${props =>
    props.completed ? "#D8D8D8" : "#979797"};
  cursor: pointer;
  background: ${props => {
    if (props.currentlySelected && !props.completed) return "#f7f7f7";
    else if (props.currentlySelected) return "#88c47d";
    else if (props.completed) return "#5BA84C";
    else return "transparent";
  }}
  color: ${props => (props.completed ? "#fff" : "default")};
  transition: 0.5s all;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.p`
  margin-left: 15px;
  margin-right: 10px;
  width: 100%;
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


   constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  click = () => {
    this.props.resetAnswers();
    this.props.history.push(`${this.props.subjectURL}?pageNumber=${this.props.index}`);
    window.scrollTo(0, 0);
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
      <Wrapper
        onClick={this.click}
        completed={this.props.completed}
        currentlySelected={(this.props.index == this.props.page)}
      >
        <ItemName>{this.props.children}</ItemName>
        <StarArea>{this.getStars()}</StarArea>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    subjectURL: state.subjectURL,
    page: state.page
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(SidebarItem));
