import axios from "axios";
import { store } from "./../index.js";
import { setCoursePercentages } from "../reducers/pageReducer.js";

export const addAchievemnet = (ranking, subject) => {
  const isLoggedIn = store.getState().auth;
  if (isLoggedIn) {
    axios.put("/api/editAchievements", {
      ranking,
      subject,
      store: store.getState().achievements
    });
  }

  return dispatch => {
    dispatch({
      type: "SUBJECT_RANKING",
      ranking,
      subject
    });
  };
};

export const achievementInit = achievementObject => {
  return dispatch => {
    dispatch({
      type: "ACHIEVEMENT_INIT",
      payload: achievementObject
    });
  };
};

export const changeScore = change => {
  return dispatch => {
    dispatch({
      type: "CHANGE_SCORE",
      change
    });
  };
};

export const setCoursePercentagesForRedux = percentages => {
  return dispatch => {
    dispatch({
      type: "SET_PERCENTAGES",
      payload: percentages
    });
  };
};
