import React, { Componet } from "react";
import styled from "styled-components";
import googleButton from "../../img/btn_google_light.svg";

import * as firebase from "firebase/app";
import "firebase/auth";


const provider = new firebase.auth.GoogleAuthProvider();


export default class GoogleButton extends React.Component {

  clicked = async ()=> {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    //console.log(result.user);
  }

  render() {
    return (
      <img onClick = {this.clicked} src={googleButton} />
      );
  }
}

