const defaultState = {
  isProjectSubmissionPage: false,
  projectURL: "",
  projectTitle: "",
  projectKey: "",
  isValidUrl: false,
  projectsInDatabase: [],
  votingIconsInDatabase: [],
  selectedProjectVotingIcon: {},
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
    case "SET_VOTING_ICONS_FROM_DATABASE":
      return { ...state, votingIconsInDatabase: [...state.votingIconsInDatabase, action.payload]};
    case "IS_PROJECT_SUBMISSION_PAGE":
      return { ...state, isProjectSubmissionPage: action.payload };
    case "IS_VALID_URL":
      return {...state, isValidUrl: action.payload };
    case "CHANGE_PROJECT_VOTING_ICON":
      //const {projectID, projectIcon} = action.payload
      return {...state, 
        selectedProjectVotingIcon: {
          ...state.selectedProjectVotingIcon,
          ...action.payload }};
    default:
      return state;
  }
}
