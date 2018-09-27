export const onProjectURLChange = text => {
  return {
    type: "CHANGE_PROJECT_URL",
    payload: text
  };
};

export const onProjectTitleChange = text => {
  return {
    type: "CHANGE_PROJECT_TITLE",
    payload: text
  };
};

export const isProjectSubmissionPage = bool => {
  return {
    type: "IS_PROJECT_SUBMISSION_PAGE",
    payload: bool
  };
};

export const isValidUrl = bool => {
  return {
    type: "IS_VALID_URL",
    payload: bool
  };
};
