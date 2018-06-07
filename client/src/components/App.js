import React, { Component } from 'react';
import Login from './Login/Login';
import Main from './Main/Main'
import Subject from './Subject/Subject'
import {BrowserRouter, Route} from 'react-router-dom';






class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject />
      </div>
    );
  }
}

export default App;
