import React, { Component } from "react";
import axios from "axios";
import Main from "./Main/Main";
import Subject from "./Subject/Subject";
import Projects from "./Projects/Projects";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

//Audacity
import Audacity1 from "./Pages/Audacity/Audacity1";

//Arduino
import ArduinoBasics1 from "./Pages/ArduinoBasics/ArduinoBasics1";
import ArduinoBasics2 from "./Pages/ArduinoBasics/ArduinoBasics2";


import Arduino1 from "./Pages/Arduino/Arduino1";
import Arduino2 from "./Pages/Arduino/Arduino2";

//Google Chrome 
import GoogleApps1 from "./Pages/GoogleApps/GoogleApps1";
//import GoogleChrome2 from "./Pages/GoogleChrome/GoogleChrome2";

//Google Docs

import GoogleDocs1 from "./Pages/GoogleDocs/GoogleDocs1";
import GoogleDocs2 from "./Pages/GoogleDocs/GoogleDocs2";

//Google Sheets

import GoogleSheets1 from "./Pages/GoogleSheets/GoogleSheets1";
import GoogleSheets2 from "./Pages/GoogleSheets/GoogleSheets2";

//Google Slides

import GoogleSlides1 from "./Pages/GoogleSlides/GoogleSlides1";
import GoogleSlides2 from "./Pages/GoogleSlides/GoogleSlides2";

//HTML & CSS

import HtmlCss1 from "./Pages/HtmlCss/HtmlCss1";

//Illustrator

import Illustrator1 from "./Pages/Illustrator/Illustrator1";
import Illustrator2 from "./Pages/Illustrator/Illustrator2";

//iMovie

import IMovie1 from "./Pages/IMovie/IMovie1";
import IMovie2 from "./Pages/IMovie/IMovie2";

//Lego Mindstorms
import LegoMindStorms1 from "./Pages/Engineering/LegoMindstorms1";
import LegoMindStorms2 from "./Pages/Engineering/LegoMindstorms2";

//LucidPress
import LucidPress1 from "./Pages/LucidPress/LucidPress1";
import LucidPress2 from "./Pages/LucidPress/LucidPress2";

//MacOS
import MacOS1 from "./Pages/MacOS/MacOS1";
import MacOS2 from "./Pages/MacOS/MacOS2";

//Photoshop
import Photoshop1 from "./Pages/Photoshop/Photoshop1";
import Photoshop2 from "./Pages/Photoshop/Photoshop2";

//Kerbal SpaceProgram
import KerbalSpaceProgram1 from "./Pages/Engineering/KerbalSpaceProgram1";

//Scratch
import Scratch1 from "./Pages/Scratch/Scratch1";
import Scratch2 from "./Pages/Scratch/Scratch2";
import Scratch3 from "./Pages/Scratch/Scratch3";

//Soundtrap
import Soundtrap1 from "./Pages/Soundtrap/Soundtrap1";
import Soundtrap2 from "./Pages/Soundtrap/Soundtrap2";

//Tinkercad
import Tinkercad1 from "./Pages/Tinkercad/Tinkercad1";

//WeVideo
import WeVideo1 from "./Pages/WeVideo/WeVideo1";
import WeVideo2 from "./Pages/WeVideo/WeVideo2";





export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "");
}

class App extends Component {
  componentDidMount() {
    this.getUserStateFromDatabase();
    this.getProjectInfoFromDatabase();
    this.props.fetchUser();
    this.props.setPage(0);
  }

  getUserStateFromDatabase = async () => {
    let state = await axios.get("/api/getStateFromDatabase");
    state = state.data;
    if (state) {
      this.props.completeInit(state.completed);
      if (state.score) this.props.changeScore(state.score);
      this.props.achievementInit(state.achievements);
    }
  };

  getProjectInfoFromDatabase = async ()=> {
    let projectData = await axios.get("/api/getUserProjects");
    projectData = projectData.data;
    if(projectData) this.props.setProjectsFromDatabase(projectData);

  }

  getRoutes() {
    return;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.getRoutes()}
            <Route path="/" component={Main} exact />
            <Route path = "/projects" component = {Projects}/>
            <Route path = "/[object Object]" component = {Main} />
            <Route path="/audacity1" component={Audacity1} />

            <Route path="/arduino1" component={Arduino1} />
            <Route path="/arduino2" component={Arduino2} />

            <Route path="/arduinobasics1" component={ArduinoBasics1} />
            <Route path="/arduinobasics2" component={ArduinoBasics2} />

            <Route path="/googleapps1" component={GoogleApps1} />
            {/* <Route path="/googlechrome2" component={GoogleChrome2} /> */}

            <Route path="/googledocs1" component={GoogleDocs1} />
            <Route path="/googledocs2" component={GoogleDocs2} />

            <Route path="/googlesheets1" component={GoogleSheets1} />
            <Route path="/googlesheets2" component={GoogleSheets2} />

            <Route path="/googleslides1" component={GoogleSlides1} />
            <Route path="/googleslides2" component={GoogleSlides2} />

            <Route path="/html&css1" component={HtmlCss1} />

            <Route path="/illustrator1" component={Illustrator1} />
            <Route path="/illustrator2" component={Illustrator2} />

            <Route path="/imovie1" component={IMovie1} />
            <Route path="/imovie2" component={IMovie2} />

            <Route path="/legomindstorms1" component={LegoMindStorms1} />
            <Route path="/legomindstorms2" component={LegoMindStorms2} />

            <Route path="/lucidpress1" component={LucidPress1} />
            <Route path="/lucidpress2" component={LucidPress2} />

            <Route path="/macos1" component={MacOS1} />
            <Route path="/macos2" component={MacOS2} />

            <Route path="/photoshop1" component={Photoshop1} />
            <Route path="/photoshop2" component={Photoshop2} />
            
            <Route
              path="/kerbalspaceprogram1"
              component={KerbalSpaceProgram1}
            />
            <Route path="/scratch1" component={Scratch1} />
            <Route path="/scratch2" component={Scratch2} />
            <Route path="/scratch3" component={Scratch3} />

            <Route path="/soundtrap1" component={Soundtrap1} />
            <Route path="/soundtrap2" component={Soundtrap2} />

            <Route path = "/tinkercad1" component = {Tinkercad1} />

            <Route path="/wevideo1" component={WeVideo1} />
            <Route path="/wevideo2" component={WeVideo2} />

            <Route path="/subject" component={Subject} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
