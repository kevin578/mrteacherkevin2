import React from "react";
import { connect } from "react-redux";
import { onTextChange, isProjectSubmissionPage } from "../../actions/projectSubmissionActions";

import { TextField } from "./Quiz";

class ProjectSubmission extends React.Component {

    componentDidMount(){
        this.props.isProjectSubmissionPage(true);
    }
    componentWillUnmount() {
        this.props.isProjectSubmissionPage(false);
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
  { onTextChange, isProjectSubmissionPage }
)(ProjectSubmission);
