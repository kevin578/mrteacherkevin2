import axios from "axios";
//import { store } from "./../index.js";

// export * from "./auth";
// export * from "./buttonActions";
// export * from "./rankings";
// export * from "./textEditorActions";
// export * from "./projectsActions";
// export * from "./pageActions";
// export * from "./mainPageActions";

export const setPage = pageNumber => {
  return {
      type: "SET_PAGE",
      payload: pageNumber
  };
};

export const setPageKey = pageKey => {
  return {
      type: "SET_PAGE_KEY",
      payload: pageKey
    };
};

export const setSubjectURL = subject => {
  return {
      type: "SET_SUBJECT_URL",
      subject
    };
};

export const setSubject = subject => {
  return dispatch => {
    dispatch({
      type: "SET_SUBJECT",
      subject
    });
  };
};

export const completeInit = completeObject => {
  return dispatch => {
    dispatch({
      type: "COMPLETE_INIT",
      payload: completeObject
    });
  };
};

// export const completeButton = (pageKey, subject) => {
//   const isLoggedIn = store.getState().auth;
//   if (isLoggedIn) {
//     axios.put("/api/editCompletedPages", {
//       pageKey,
//       subject,
//       store: store.getState().completed
//     });
//   }

//   return dispatch => {
//     dispatch({
//       type: "COMPLETE_BUTTON",
//       pageKey,
//       subject
//     });
//   };
// };
