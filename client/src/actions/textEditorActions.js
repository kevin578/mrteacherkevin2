export const changeEditorContent = content => {
  return dispatch => {
    dispatch({
      type: "CHANGE_EDITOR_CONTENT",
      payload: content
    });
  };
};

export const addTests = tests => {
  return dispatch => {
    dispatch({
      type: "ADD_TESTS",
      payload: tests
    });
  };
};
