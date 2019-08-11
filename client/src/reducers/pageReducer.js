const defaultPageState = {
  courseTitle: "",
  subjectPageLength: 0,
  number: 0,
  pageKey: "",
  subjectURL: "",
  subject: "",
  coursePercentages: []
};

export function pageReducer(state = defaultPageState, action) {
  switch (action.type) {
    case "SET_PAGE":
      return { ...defaultPageState, number: action.payload };
    case "SET_COURSE_TITLE":
      return { ...state, courseTitle: action.payload };
    case "SET_SUBJECT_PAGE_LENGTH":
      return { ...state, subjectPageLength: action.payload };
    case "SET_PAGE_KEY":
      return { ...state, pageKey: action.payload };
    case "SET_SUBJECT_URL":
      return { ...state, subjectURL: action.payload };
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_PERCENTAGES":
      return { ...state, percentages: action.payload };
    default:
      return state;
  }
}
export function addAcheievement(state = null, action) {
  let stateCopy = { ...state };
  const subject = action.subject;
  const ranking = action.ranking;

  switch (action.type) {
    case "SUBJECT_RANKING":
      if (subject in stateCopy && !stateCopy[subject].includes(ranking)) {
        stateCopy[subject].push(ranking);
      } else if (!(subject in stateCopy)) {
        stateCopy[subject] = [ranking];
      }
      return stateCopy;
    case "ACHIEVEMENT_INIT":
      return action.payload ? action.payload : null;

    default:
      return state;
  }
}

export function completePage(state = {}, action) {
  let stateCopy = { ...state };
  const subject = action.subject;
  const pageKey = action.pageKey;

  switch (action.type) {
    case "COMPLETE_BUTTON":
      if (subject in stateCopy && !stateCopy[subject].includes(pageKey)) {
        stateCopy[subject].push(pageKey);
      } else if (!(subject in stateCopy)) {
        stateCopy[subject] = [pageKey];
      }
      return stateCopy;

    case "COMPLETE_INIT":
      return action.payload ? action.payload : null;
    default:
      return state;
  }
}
