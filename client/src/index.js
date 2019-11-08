import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import * as firebase from "firebase/app";

// import "firebase/auth";

// var config = {
//     apiKey: "AIzaSyAFnwDygYy6uJyoZ99-qaScXwDi-G8uTBc",
//     authDomain: "mrteacherkevin-204010.firebaseapp.com",
//     projectId: "mrteacherkevin-204010",
//   };

// firebase.initializeApp(config);
// firebase.auth().useDeviceLanguage();


export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root") || document.createElement("div") // for testing purposes
);
registerServiceWorker();
