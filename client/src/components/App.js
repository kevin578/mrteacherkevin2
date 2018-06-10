import React, { Component } from 'react';
import Main from './Main/Main'
import Subject from './Subject/Subject'
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import LegoMindStorms1 from './Pages/Engineering/LegoMindstorms1';







class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.setPage(0);
  }



  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route  path = "/" component = {Main} exact/>
              <Route path = "/legomindstorms1" component = {LegoMindStorms1} />
              <Route path = "/subject" component = {Subject} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
