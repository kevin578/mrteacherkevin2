const defaultState = {
  isProjectSubmissionPage: false,
  inputValue: "",
  isValidUrl: false,
};

export default function projectSubmisionReducer(state = defaultState, action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, inputValue: action.payload };
    case "IS_PROJECT_SUBMISSION_PAGE":
      return { ...state, isProjectSubmissionPage: action.payload };
    case "IS_VALID_URL":
      return {...state, isValidUrl: action.payload };
    default:
      return state;
  }
}
