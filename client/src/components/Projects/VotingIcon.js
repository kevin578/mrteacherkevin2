import React, { Component } from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as actions from "../../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinTears,
  faSplotch,
  faPaintBrush,
  faGrin
} from "@fortawesome/free-solid-svg-icons";





const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

class VotingIcon extends Component {

    RetrieveIconData() {
        switch(this.props.iconType) {
            case "wellDone":
                return ({
                    icon: faSplotch,
                    message: "This project is so well done!"
                });
            case "fun":
                return ({
                    icon: faGrin,
                    message: "This project makes me smile!" 
                });
            case "creative":
                return ({
                    icon: faPaintBrush,
                    message: "Wow, this is so creative!"
                });
            default:
                return null;
        }
    }



  render() {
    const {icon, message} = this.RetrieveIconData();
    return <Icon icon = {icon}/>;
  }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps, actions)(VotingIcon);
