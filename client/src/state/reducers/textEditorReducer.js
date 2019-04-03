export function setEditorContent(state = null, action) {
  switch (action.type) {
    case "CHANGE_EDITOR_CONTENT":
      return action.payload;
    default:
      return state;
  }
}

export function setTests(state = null, action) {
  switch (action.type) {
    case "ADD_TESTS":
      return action.payload;
    default:
      return state;
  }
}
