import React, { Componet } from "react";
import googleButton from "../../img/btn_google_light.svg";

export default class GoogleButton extends React.Component {

  clicked = async ()=> {
    window.location = "/auth/google";
  }

  render() {
    return (
      <img onClick = {this.clicked} src={googleButton} />
      );
  }
}

