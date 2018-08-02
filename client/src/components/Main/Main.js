import React from "react";
import styled from "styled-components";
import Header from "./../Header";
import SubjectButton from "./SubjectButton";
import Axios from "../../../node_modules/axios";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Subjects = styled.div`
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`;

class Main extends React.Component {

  componentDidMount() {
    Axios.get("/api/getCoursePercentages").then(percentages => {
      this.props.setCoursePercentagesForRedux(percentages.data);
    });
  }

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
          />
          <SubjectButton
            background="linear-gradient(45deg, #D3C075 0%, #D37722 100%)"
            subject="Kerbal Space Program"
            destination="/kerbalspaceprogram1"
          />
          <SubjectButton
            background="linear-gradient(45deg, #B92597 0%, #8522D3 100%);"
            subject="Photoshop"
            destination="/kerbalspaceprogram1"
          />
        </Subjects>
      </div>
    );
  }
}



export default connect(null, actions)(Main);
