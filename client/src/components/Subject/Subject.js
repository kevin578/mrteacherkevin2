import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import queryString from "query-string";
import Header from "../Header";
import Sidebar from "./Sidebar";
import * as actions from "../../actions";
import { headerHeight } from "../Header";
import media from "./mediaQueries";

const Body = styled.div`
  display: flex;
`;
const Content = styled.div`
  margin-top: 10px;
  margin-left: 430px;
  ${media.tablet`margin-left: 50px;`}
  ${media.tablet`margin-left: 10px;`}
  width: 60%;
  ${media.tablet`width: 95%;`}
  margin-top: ${headerHeight}px;
  padding-bottom: 120px;
`;

class Subject extends React.Component {
  componentDidMount() {
    this.props.setSubjectURL(this.props.urlName);
    this.props.setSubject(this.props.title);
  }

  componentDidUpdate() {
    this.props.setPageKey(this.props.children[this.props.page].key);
    this.setPage();
  }

  setPage() {
    const query = queryString.parse(this.props.location.search);
    if ("pageNumber" in query) {
      this.props.setPage(query.pageNumber);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.title} | {this.props.pageInfo.courseTitle} | {this.props.children[this.props.page].props.title}</title>
        </Helmet>
        <Header />
        <Body>
          <Sidebar
            title={this.props.title}
            steps={this.props.children}
            subject={this.props.urlName}
          />/
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
  return {
    page: state.page,
    subject: state.subject,
    tests: state.tests,
    pageInfo: state.pageInfo
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Subject)
);
