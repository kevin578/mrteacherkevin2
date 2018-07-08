import React, { Component } from "react";
import Main from "./Main/Main";
import Subject from "./Subject/Subject";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import LegoMindStorms1 from "./Pages/Engineering/LegoMindstorms1";
import KerbalSpaceProgram1 from "./Pages/Engineering/KerbalSpaceProgram1";
import axios from "axios";

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "");
}

class App extends Component {
  getStateFromDatabase = async () => {
    let state = await axios.get("/api/getStateFromDatabase");
    state = state.data;
    if (state) {
      this.props.completeInit(state.completed);
      if (state.score) this.props.changeScore(state.score);
      this.props.achievementInit(state.achievements);
    }
  };

  componentDidMount() {
    this.getStateFromDatabase();
    this.props.fetchUser();
    this.props.setPage(0);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Main} exact />
            <Route path="/legomindstorms1" component={LegoMindStorms1} />
            <Route
              path="/kerbalspaceprogram1"
              component={KerbalSpaceProgram1}
            />

            <Route path="/subject" component={Subject} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
