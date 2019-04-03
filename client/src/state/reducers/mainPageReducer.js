const defaultState = {
  startedSubjects: [],
  notStartedSubjects: [],
  comingSoonSubjects: []
};

export default function mainPageRedcuer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_STARTED_SUBJECTS":
      return { ...state, startedSubjects: action.payload };
    case "ADD_NOT_STARTED_SUBJECTS":
      return { ...state, notStartedSubjects: action.payload };
    case "ADD_COMING_SOON_SUBJECTS":
      return { ...state, comingSoonSubjects: action.payload };
    default:
      return state;
  }
}
