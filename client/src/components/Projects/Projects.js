import React, { Component } from "react";
import Header from "../Header";
import queryString from "query-string";

export default class Projects extends Component {

    componentDidMount() {
        //console.log(queryString.parse(this.props.location.search));
 
    }

  render() {
    return (
    <div>
        <Header/>

    </div>
    );
  }
}
