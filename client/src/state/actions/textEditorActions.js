export const changeEditorContent = content => ({
  type: "CHANGE_EDITOR_CONTENT",
  payload: content
});

export const addTests = tests => ({
  type: "ADD_TESTS",
  payload: tests
});
