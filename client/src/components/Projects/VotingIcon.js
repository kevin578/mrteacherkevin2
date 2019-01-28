import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import Axios from "axios";
import * as actions from "../../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinTears,
  faSplotch,
  faPaintBrush,
  faGrin
} from "@fortawesome/free-solid-svg-icons";
import { changeIconVoteNumber } from "../../actions";
import { notEqual } from "assert";

const Wrapper = styled.div`
  margin-right: 20px;
  display: flex;
  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.iconcolor};
  opacity: 0.9;
`;

const IconInfo = styled.div`
  width: 160px;
  position: absolute;
  left: 0px;
  top: 35px;
  background: white;
  border: 1px solid black;
  display: ${props => (props.showMessage ? "block" : "none")};
  font-size: 12px;
  padding: 3px;
`;

const Number = styled.div`
  margin-top: 5px;
  color: #727882;
`;

let checkedColor = "#f48d49";
let notCheckedColor = "#727882";

class VotingIcon extends Component {
  state = {
    votes: this.props.votes,
    previousVotes: this.props.votes,
    showMessage: false,
    isHovered: false
  };

  async componentDidMount() {
    const { projectId } = this.props;
    const projectVotes = await Axios.get("/api/getProjectVotes", {
      params: { id: projectId }
    });
  }
  componentWillUnmount() {}

  RetrieveIconData() {
    switch (this.props.iconType) {
      case "wellDone":
        return {
          icon: faSplotch,
          message: "This project is so well done!"
        };
      case "fun":
        return {
          icon: faGrin,
          message: "This project makes me smile!"
        };
      case "creative":
        return {
          icon: faPaintBrush,
          message: "This project is really creative!"
        };
      default:
        return null;
    }
  }

  iconIsSelected = () => {
    const { projects, iconType, projectId } = this.props;
    const { selectedProjectVotingIcon } = projects;
    const matched = _.get(selectedProjectVotingIcon, projectId);
    return matched == iconType;
  };

  getColor = () => {
    const color = this.iconIsSelected() ? checkedColor : notCheckedColor;
    return color;
  };

  click = () => {
    window.onbeforeunload = function() {
      return "";
    };
    const {
      projectKey,
      iconType,
      changeProjectVotingIcon,
      changeIconVoteNumber,
      projectId
    } = this.props;
    const { selectedProjectVotingIcon } = this.props.projects;
    if (_.get(selectedProjectVotingIcon, projectId) == iconType) {
      _.set(selectedProjectVotingIcon, projectId, null);
    } else {
      _.set(selectedProjectVotingIcon, projectId, iconType);
    }
    this.setState({ showMessage: false });
    changeProjectVotingIcon(selectedProjectVotingIcon);
  };

  sendVoteNumberToDatabase = async voteCount => {
    if (voteCount === this.state.previousVotes) return;
    this.setState({
      previousVotes: voteCount
    });

    await Axios.post("/api/changeProjectVotes", {
      voteCount,
      selectedIcon: this.iconIsSelected() ? this.props.iconType : null,
      id: this.props.projectId,
      user: this.props.auth._id
    });

    window.onbeforeunload = null;
  };

  getVoteNumber = () => {
    const { votes } = this.props;
    if (this.getColor() == checkedColor) {
      const newVoteNumber = votes + 1;
      this.sendVoteNumberToDatabase(newVoteNumber);
      return newVoteNumber;
    } else {
      this.sendVoteNumberToDatabase(votes);
      return votes;
    }
  };

  mouseOver = () => {
    this.setState({ isHovered: true });
    setTimeout(() => {
      if (this.state.isHovered) {
        this.setState({ showMessage: true });
      }
    }, 300);
  };

  mouseExit = () => {
    this.setState({
      isHovered: false,
      showMessage: false
    });
  };

  render() {
    const { icon, message } = this.RetrieveIconData();
    return (
      <Wrapper>
        <Icon
          icon={icon}
          onClick={this.click}
          iconcolor={this.getColor()}
          onMouseEnter={this.mouseOver}
          onMouseLeave={this.mouseExit}
        />
        <Number>{this.getVoteNumber()}</Number>
        <IconInfo showMessage={this.state.showMessage}>{message}</IconInfo>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(VotingIcon);
