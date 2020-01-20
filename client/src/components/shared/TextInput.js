import React from "react";
import styled from "styled-components";

//<TextField placeholder="Username" name="name-input" type="text" />
const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
  display: inline-block;
  width: ${props => (props.labelWidth ? props.labelWidth : "80px")};
`;

const Input = styled.input`
  border: 1px solid #cccccc;
  width: 250px;
  height: 30px;
  border-radius: 3px;
  left: 50px;
  font-size: 16px;
  padding-left: 5px;
`;

const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
  margin-left: ${props=> props.errorMarginLeft? props.errorMarginLeft : "100px"};
`;

const TextInput = (props, { type = "text" }) => {
  const showErrorMessage = props.errorMessage;

  return (
    <Container>
      <Label labelWidth={props.labelWidth} htmlFor={props.name}>
        {props.label}
      </Label>
      <Input
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
      {showErrorMessage && (
        <ErrorMessage errorMarginLeft={props.errorMarginLeft}>
          {props.errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default TextInput;
