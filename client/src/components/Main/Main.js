import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton from "./SubjectButton";

const Subjects = styled.div`
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`;

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Subjects>
          <SubjectButton
            background="linear-gradient(45deg, #75D39C 0%, #22D3BE 100%)"
            destination="/legomindstorms"
            subject="Lego Mindstorms"
            courses={["Robotic Rascal", "Robotic Renegade"]}
          >

          </SubjectButton>
          {/* <SubjectButton
            background="linear-gradient(45deg, #D3C075 0%, #D37722 100%)"
            subject="Kerbal Space Program"
            destination="/kerbalspaceprogram1"
          />
          <SubjectButton
            background="linear-gradient(45deg, #D3C075 0%, #D37722 100%)"
            subject="Kerbal Space Program"
            destination="/kerbalspaceprogram1"
          /> */}
        </Subjects>
      </div>
    );
  }
}

export default Main;
