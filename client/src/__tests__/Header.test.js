import React from "react";
import styled from "styled-components";
import { shallow } from "../testConfig";
import  { Header } from "../components/Header";
import renderer from "react-test-renderer";

it("Header renders correctly", () => {
  const tree = shallow(<Header />);
  expect(tree).toMatchSnapshot();
});


