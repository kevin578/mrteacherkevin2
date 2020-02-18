import React from "react";
import styled from "styled-components";
import { months, years } from "./month_year";

const BirthdaySelectInput = styled.select`
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: 27px;
  background: url(https://png.pngtree.com/svg/20161117/b360928f8b.svg) 96% / 15%
    no-repeat #fff;
`;

const BirthdayOption = styled.option``;

const BirthdayLabel = styled.label``;

const BirthdayContainer = styled.div`
  margin-bottom: 20px;
`;

const BirthdayError = styled.p`
  color: red;
  font-size: 12px;
`;

const BirthdaySelect = props => {
  function setOptions(options) {
    return options.map((optionValue, i) => (
      <BirthdayOption key={`${optionValue}${i}`}>{optionValue}</BirthdayOption>
    ));
  }

  return (
    <BirthdayContainer>
      <BirthdayLabel htmlFor="birth-month">Birthday:</BirthdayLabel>
      <BirthdaySelectInput
        onChange={e => props.setMonth(e.target.value)}
        name="birth-month"
      >
        {setOptions(months)}
      </BirthdaySelectInput>
      <BirthdaySelectInput onChange={e => props.setYear(e.target.value)}>
        {setOptions(years())}
      </BirthdaySelectInput>
      {props.birthdayError && <BirthdayError>{props.birthdayError}</BirthdayError>}
    </BirthdayContainer>
  );
};

export default BirthdaySelect;
