import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { addCheckbox } from "../../actions";

const Box = styled.input``;

const Label = styled.p`
  display: inline-block;
  margin-left: 15px;
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  componentDidMount() {
    this.props.addCheckbox();
  }

  handleInputChange = event => {
    const { checked } = event.target;
    checked ? this.props.removeCheckbox() : this.props.addCheckbox();
    this.setState({
      completed: checked
    });
  };

  render() {
    return (
      <div>
        <Box
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleInputChange}
        />
        <Label>{this.props.children}</Label>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Checkbox);
