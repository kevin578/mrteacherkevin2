import React, { Component } from "react";
import styled from "styled-components";
import Modal from "react-modal";



const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 100
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    width: 500,
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};


const NameInput = styled.input`
`

export default class UserInfoModal extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} style={customStyles} contentLabel="Example Modal">
          <h1>Sign up</h1>
          <NameInput type = "text"/>
        </Modal>
      </div>
    );
  }
}
