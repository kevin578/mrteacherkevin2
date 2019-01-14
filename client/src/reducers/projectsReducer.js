const defaultState = {
  isProjectSubmissionPage: false,
  projectURL: "",
  projectTitle: "",
  projectKey: "",
  isValidUrl: false,
  projectsInDatabase: [],
  selectedProjectVotingIcon: {}
};

export default function projectsReducer(state = defaultState, action) {
  switch (action.type) {
    case "CHANGE_PROJECT_URL":
      return { ...state, projectURL: action.payload };
    case "CHANGE_PROJECT_TITLE":
      return { ...state, projectTitle: action.payload };
    case "ADD_PROJECT_KEY":
      return { ...state, projectKey: action.payload};
    case "SET_PROJECTS_FROM_DATABASE":
      return { ... state, projectsInDatabase: action.payload};
    case "IS_PROJECT_SUBMISSION_PAGE":
      return { ...state, isProjectSubmissionPage: action.payload };
    case "IS_VALID_URL":
      return {...state, isValidUrl: action.payload };
    case "CHANGE_PROJECT_VOTING_ICON":
      return {...state, selectedProjectVotingIcon: action.payload };
    default:
      return state;
  }
}
