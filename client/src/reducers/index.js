import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {
  setPage,
  setPageKey,
  completePage,
  setSubjectURL,
  setSubject,
  addAcheievement
} from "./pageReducer";
import { changeScore, checkAnswers, setCheckboxes } from "./buttonReducer";

export default combineReducers({
  auth: authReducer,
  page: setPage,
  pageKey: setPageKey,
  subject: setSubject,
  subjectURL: setSubjectURL,
  achievements: addAcheievement,
  completed: completePage,
  score: changeScore,
  correct: checkAnswers,
  remainingCheckboxes: setCheckboxes
});
