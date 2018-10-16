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

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
