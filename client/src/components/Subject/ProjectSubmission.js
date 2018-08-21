import React from "react";
import { connect } from "react-redux";
import {
  onTextChange,
  isProjectSubmissionPage,
  isValidUrl
} from "../../actions/projectSubmissionActions";

import { TextField } from "./Quiz";

class ProjectSubmission extends React.Component {
  componentDidMount() {
    this.props.isProjectSubmissionPage(true);
    this.props.isValidUrl(null);
  }
  componentWillUnmount() {
    this.props.isProjectSubmissionPage(false);
    this.props.isValidUrl(null);
  }

  handleChange = event => {
    this.props.onTextChange(event.target.value);
  };

  render() {
    return (
      <TextField
        type="text"
        onChange={this.handleChange}
        value={this.props.projectSubmission.inputValue}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    projectSubmission: state.projectSubmission
    
  };
}

export default connect(
  mapStateToProps,
  { onTextChange, isProjectSubmissionPage, isValidUrl }
)(ProjectSubmission);
