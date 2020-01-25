import React from "react";
import styled from "styled-components";
import { Button as ButtonPrototype } from "../shared/utilityComponents";

const Button = styled(ButtonPrototype)`
  font-weight: bold;
  color: #fff;
  cursor: ${props => (props.isLoading ? "default" : "pointer")};
  margin-top: 30px;
  width: 200px;
  opacity: ${props => (props.isLoading ? "0.5" : "1")};
  &:hover {
    box-shadow: 0px 0px 5px #ff9000;
  }
`;

const FormButton = props => {
  return (
    <Button
      style = {props.style}
      isLoading={props.isLoading}
      disabled={props.isLoading}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

FormButton.defaultProps = {
  isLoading: false,
  style: {}
};

export default FormButton;
