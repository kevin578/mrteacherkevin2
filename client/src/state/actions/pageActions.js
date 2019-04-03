export const setCourseTitle = title => {
  return {
    type: "SET_COURSE_TITLE",
    payload: title
  };
};

export const setSubjectPageLength = arrayLength => {
  return {
    type: "SET_SUBJECT_PAGE_LENGTH",
    payload: arrayLength
  };
};
