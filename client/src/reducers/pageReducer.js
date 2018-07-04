//import {SET_PAGE, COMPLETE_BUTTON, SET_SUBJECT} from './../actions'

export function setPage(state = 0, action) {
  switch (action.type) {
    case "SET_PAGE":
      return action.payload;
    default:
      return state;
  }
}

export function setPageKey(state = null, action) {
  switch (action.type) {
    case "SET_PAGE_KEY":
      return action.payload;
    default:
      return state;
  }
}

export function setSubjectURL(state = null, action) {
  switch (action.type) {
    case "SET_SUBJECT_URL":
      return action.subject;
    default:
      return state;
  }
}

export function setSubject(state = null, action) {
  switch (action.type) {
    case "SET_SUBJECT":
      return action.subject;
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
