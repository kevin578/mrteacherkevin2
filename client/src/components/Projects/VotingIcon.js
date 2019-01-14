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

const Wrapper = styled.div`

  margin-right: 20px;
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.iconcolor};
  opacity: .9;
`;

const Number = styled.div`
  margin-top: 5px;
  color: #727882;
`;

class VotingIcon extends Component {
  state = {
    votes: 0,
    showVotes: false
  };

  async componentDidMount() {
    const { projectId } = this.props;
    const projectVotes = await Axios.get("/api/getProjectVotes", {
      params: { id: projectId }
    });
    
  }

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
          message: "Wow, this is so creative!"
        };
      default:
        return null;
    }
  }

  getColor = () => {
    let checkedColor = "#f48d49";
    let notCheckedColor = "#727882";
    const { projects, iconType, projectId } = this.props;
    const { selectedProjectVotingIcon } = projects;
    const matched = _.get(selectedProjectVotingIcon, projectId);
    const color = matched == iconType ? checkedColor : notCheckedColor;
    return color;
  };

  click = () => {
    const {
      projectKey,
      iconType,
      changeProjectVotingIcon,
      projectId
    } = this.props;
    const { selectedProjectVotingIcon } = this.props.projects;
    if (_.get(selectedProjectVotingIcon, projectId) == iconType) {
      _.set(selectedProjectVotingIcon, projectId, null);
    } else {
      _.set(selectedProjectVotingIcon, projectId, iconType);
    }

    changeProjectVotingIcon(selectedProjectVotingIcon);
  
  
  
  
  };

  render() {
    const { icon, message } = this.RetrieveIconData();
    return (
      <Wrapper>
        <Icon icon={icon} onClick={this.click} iconcolor={this.getColor()} />
        <Number>{this.state.votes}</Number>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(
  mapStateToProps,
  actions
)(VotingIcon);
