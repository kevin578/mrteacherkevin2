import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import camelCase from "camelcase";
import Header from "../Header";
import Sidebar from "./Sidebar";
import * as actions from "../../actions";
import { headerHeight } from "../Header";

const Body = styled.div`
  display: flex;
`;
const Content = styled.div`
  margin-top: 10px;
  margin-left: 430px;
  width: 60%;
  margin-top: ${headerHeight}px;
`;


class Subject extends React.Component {
  componentDidMount() {
    this.props.setSubjectURL(this.props.urlName);
    this.props.setSubject(camelCase(this.props.title));
    this.props.resetCheckbox();
  }

  componentDidUpdate() {
    this.props.setPageKey(this.props.children[this.props.page].key);
  }

  render() {
    return (
      <div>
        <Header />
        <Body>
          <Sidebar
            title={this.props.title}
            steps={this.props.children}
            subject={this.props.urlName}
          />
          <Content
            key={this.props.subject + this.props.page}
            title={this.props.children[this.props.page].props.title}
          >
            {this.props.children[this.props.page]}
          </Content>
        </Body>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { page: state.page, subject: state.subject };
}

export default connect(
  mapStateToProps,
  actions
)(Subject);
