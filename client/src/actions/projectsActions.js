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

export const addProjectKey = key => {
  return {
    type: "ADD_PROJECT_KEY",
    payload: key
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

export const setProjectsFromDatabase = projects => {
  return {
    type: "SET_PROJECTS_FROM_DATABASE",
    payload: projects
  };
};
export const changeProjectVotingIcon = projects => {
    
    return {
      type: "CHANGE_PROJECT_VOTING_ICON",
      payload: projects
    };
};

export const changeIconVoteNumber = (projectID, icon, value) => {
  return {
    type: "CHANGE_ICON_VOTE_NUMBER",
    payload: {projectID, icon, value}
  };
};
