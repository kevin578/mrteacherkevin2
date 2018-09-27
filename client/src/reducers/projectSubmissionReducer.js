const defaultState = {
  isProjectSubmissionPage: false,
  projectURL: "",
  projectTitle: "",
  isValidUrl: false,
};

export default function projectSubmisionReducer(state = defaultState, action) {
  switch (action.type) {
    case "CHANGE_PROJECT_URL":
      return { ...state, projectURL: action.payload };
    case "CHANGE_PROJECT_TITLE":
      return { ...state, projectTitle: action.payload };
    case "IS_PROJECT_SUBMISSION_PAGE":
      return { ...state, isProjectSubmissionPage: action.payload };
    case "IS_VALID_URL":
      return {...state, isValidUrl: action.payload };
    default:
      return state;
  }
}
