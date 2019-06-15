import React, { Component } from "react";
import axios from "axios";
import Main from "./Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import asyncComponent from "./AsyncComponent";


const Projects_async = asyncComponent(()=> import("./Projects/Projects"));
//Audacity
const Audacity1_async = asyncComponent(()=> import("./Pages/Audacity/Audacity1"));

//Arduino
const ArduinoBasics1_async = asyncComponent(()=> import("./Pages/ArduinoBasics/ArduinoBasics1"));
const ArduinoBasics2_async = asyncComponent(()=> import("./Pages/ArduinoBasics/ArduinoBasics2"));
const Arduino1_async = asyncComponent(()=> import("./Pages/Arduino/Arduino1"));
const Arduino2_async = asyncComponent(()=> import("./Pages/Arduino/Arduino2"));

//Google Chrome 
const GoogleApps1_async = asyncComponent(()=> import("./Pages/GoogleApps/GoogleApps1"));
const GoogleApps2_async = asyncComponent(()=> import("./Pages/GoogleApps/GoogleApps2"));


//Google Docs
const GoogleDocs1_async = asyncComponent(()=> import("./Pages/GoogleDocs/GoogleDocs1"));
const GoogleDocs2_async = asyncComponent(()=> import("./Pages/GoogleDocs/GoogleDocs2"));

//Google Sheets
const GoogleSheets1_async = asyncComponent(()=> import("./Pages/GoogleSheets/GoogleSheets1"));
const GoogleSheets2_async = asyncComponent(()=> import("./Pages/GoogleSheets/GoogleSheets2"));

//Google Slides
const GoogleSlides1_async = asyncComponent(()=> import("./Pages/GoogleSlides/GoogleSlides1"));
const GoogleSlides2_async = asyncComponent(()=> import("./Pages/GoogleSlides/GoogleSlides2"));

//HTML & CSS
const HtmlCss1_async = asyncComponent(()=> import("./Pages/HtmlCss/HtmlCss1"));

//Illustrator
const Illustrator1_async = asyncComponent(()=> import("./Pages/Illustrator/Illustrator1"));
const Illustrator2_async = asyncComponent(()=> import("./Pages/Illustrator/Illustrator2"));

//iMovie
const IMovie1_async = asyncComponent(()=> import("./Pages/IMovie/IMovie1"));
const IMovie2_async = asyncComponent(()=> import("./Pages/IMovie/IMovie2"));


//Lego Mindstorms
const LegoMindStorms1_async = asyncComponent(()=> import("./Pages/Engineering/LegoMindstorms1"));
const LegoMindStorms2_async = asyncComponent(()=> import("./Pages/Engineering/LegoMindstorms2"));

//LucidPress
const LucidPress1_async = asyncComponent(()=> import("./Pages/LucidPress/LucidPress1"));
const LucidPress2_async = asyncComponent(()=> import("./Pages/LucidPress/LucidPress2"));

//MacOS
const MacOS1_async = asyncComponent(()=> import("./Pages/MacOS/MacOS1"));
const MacOS2_async = asyncComponent(()=> import("./Pages/MacOS/MacOS2"));

//micro:bit
const Microbit1_async = asyncComponent(()=> import("./Pages/Microbit/Microbit1"));

//Photoshop
const Photoshop1_async = asyncComponent(()=> import("./Pages/Photoshop/Photoshop1"));
const Photoshop2_async = asyncComponent(()=> import("./Pages/Photoshop/Photoshop2"));

//Kerbal SpaceProgram
const KerbalSpaceProgram1_async = asyncComponent(()=> import("./Pages/Engineering/KerbalSpaceProgram1"));

//Scratch
const Scratch1_async = asyncComponent(()=> import("./Pages/Scratch/Scratch1"));
const Scratch2_async = asyncComponent(()=> import("./Pages/Scratch/Scratch2"));
const Scratch3_async = asyncComponent(()=> import("./Pages/Scratch/Scratch3"));

//Soundtrap
const Soundtrap1_async = asyncComponent(()=> import("./Pages/Soundtrap/Soundtrap1"));
const Soundtrap2_async = asyncComponent(()=> import("./Pages/Soundtrap/Soundtrap2"));

//Tinkercad
const Tinkercad1_async = asyncComponent(()=> import("./Pages/Tinkercad/Tinkercad1"));


//WeVideo
const WeVideo1_async = asyncComponent(()=> import("./Pages/WeVideo/WeVideo1"));
const WeVideo2_async = asyncComponent(()=> import("./Pages/WeVideo/WeVideo2"));



export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
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
            <Route path="/" component={Main} exact />
            <Route path = "/projects" component = {Projects_async}/>
            <Route path = "/[object Object]" component = {Main} />
            <Route path="/audacity1" component={Audacity1_async} />

            <Route path="/arduino1" component={Arduino1_async} />
            <Route path="/arduino2" component={Arduino2_async} />

            <Route path="/arduinobasics1" component={ArduinoBasics1_async} />
            <Route path="/arduinobasics2" component={ArduinoBasics2_async} />

            <Route path="/googleapps1" component={GoogleApps1_async} />
            <Route path="/googleapps2" component={GoogleApps2_async} />

            <Route path="/googledocs1" component={GoogleDocs1_async} />
            <Route path="/googledocs2" component={GoogleDocs2_async} />

            <Route path="/googlesheets1" component={GoogleSheets1_async} />
            <Route path="/googlesheets2" component={GoogleSheets2_async} />

            <Route path="/googleslides1" component={GoogleSlides1_async} />
            <Route path="/googleslides2" component={GoogleSlides2_async} />

            <Route path="/htmlcss1" component={HtmlCss1_async} />

            <Route path="/illustrator1" component={Illustrator1_async} />
            <Route path="/illustrator2" component={Illustrator2_async} />

            <Route path="/imovie1" component={IMovie1_async} />
            <Route path="/imovie2" component={IMovie2_async} />

            <Route path="/legomindstorms1" component={LegoMindStorms1_async} />
            <Route path="/legomindstorms2" component={LegoMindStorms2_async} />

            <Route path="/lucidpress1" component={LucidPress1_async} />
            <Route path="/lucidpress2" component={LucidPress2_async} />

            <Route path="/macos1" component={MacOS1_async} />
            <Route path="/macos2" component={MacOS2_async} />

            <Route path="/microbit1" component={Microbit1_async} />

            <Route path="/photoshop1" component={Photoshop1_async} />
            <Route path="/photoshop2" component={Photoshop2_async} />
            
            <Route
              path="/kerbalspaceprogram1"
              component={KerbalSpaceProgram1_async}
            />
            <Route path="/scratch1" component={Scratch1_async} />
            <Route path="/scratch2" component={Scratch2_async} />
            <Route path="/scratch3" component={Scratch3_async} />

            <Route path="/soundtrap1" component={Soundtrap1_async} />
            <Route path="/soundtrap2" component={Soundtrap2_async} />

            <Route path = "/tinkercad1" component = {Tinkercad1_async} />

            <Route path="/wevideo1" component={WeVideo1_async} />
            <Route path="/wevideo2" component={WeVideo2_async} />

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
