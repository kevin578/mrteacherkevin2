export const onTextChange = text => {
  return {
    type: "CHANGE_TEXT",
    payload: text
  };
};

export const isProjectSubmissionPage = bool => {
  return {
    type: "IS_PROJECT_SUBMISSION_PAGE",
    payload: bool
  };
};
