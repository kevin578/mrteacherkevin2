import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {
  setPage,
  setPageKey,
  completePage,
  setSubjectURL,
  setSubject,
  addAcheievement,
  setCoursePercentages
} from "./pageReducer";
import {
  changeScore,
  checkAnswers,
  setCheckboxes,
  allTestsCompleted
} from "./buttonReducer";
import { setEditorContent, setTests } from "./textEditorReducer";

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
  remainingCheckboxes: setCheckboxes,
  textEditorContent: setEditorContent,
  tests: setTests,
  allTestsCompleted,
  coursePercentages: setCoursePercentages
});
