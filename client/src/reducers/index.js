import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { pageReducer, addAcheievement, completePage
} from "./pageReducer";
import {
  changeScore,
  checkAnswers,
  setCheckboxes,
  allTestsCompleted
} from "./buttonReducer";
import { setEditorContent, setTests } from "./textEditorReducer";
import projectsReducer from "./projectsReducer";
import mainPageReducer from "./mainPageReducer";

export default combineReducers({
  auth: authReducer,
  page: pageReducer,
  achievements: addAcheievement,
  completed: completePage,
  score: changeScore,
  correct: checkAnswers,
  remainingCheckboxes: setCheckboxes,
  textEditorContent: setEditorContent,
  tests: setTests,
  allTestsCompleted,
  projects: projectsReducer,
  mainPage: mainPageReducer,
});
