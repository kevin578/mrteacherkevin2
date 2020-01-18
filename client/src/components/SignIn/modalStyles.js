import styled from "styled-components";
import { Button } from "../shared/utilityComponents";

export const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 22, 72, 0.75)",
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

export const Header = styled.h1`
  font-weight: 400;
  margin-bottom: 40px;
`;

export const SignupButton = styled(Button)`
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
  width: 200px;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`;

export const Or_Text = styled.p`
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
