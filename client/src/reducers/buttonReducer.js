export function changeScore(state = 0, action) {
  switch (action.type) {
    case "CHANGE_SCORE":
      return state + action.change;
    default:
      return state;
  }
}

export function checkAnswers(state = {}, action) {
  let stateCopy = { ...state };
  stateCopy[action.answer] = action.correct;
  switch (action.type) {
    case "CHECK_ANSWER":
      return stateCopy;
    case "RESET_ANSWER":
      return {};
    default:
      return state;
  }
}

export function setCheckboxes(state = 0, action) {
  switch (action.type) {
    case "ADD_CHECKBOX":
      return state + 1;
    case "REMOVE_CHECKBOX":
      return state - 1;
    case "RESET_CHECKBOX":
      return 0;
    default:
      return state;
  }
}

export function allTestsCompleted(state = null, action) {
  switch (action.type) {
    case "ALL_TESTS_COMPLETED":
      return action.payload;
    default:
      return state;
  }
}
