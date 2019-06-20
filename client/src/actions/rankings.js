import axios from "axios";

export const addAchievemnet = ({ranking, subject, auth, achievements}) => {
  if (auth) {
    axios.put("/api/editAchievements", {
      ranking,
      subject,
      store: achievements
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
