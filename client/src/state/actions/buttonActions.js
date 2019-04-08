export const checkAnswers = (correct, answer) => ({
    type: "CHECK_ANSWER",
    correct,
    answer
});

export const resetAnswers = () => ({
  type: "RESET_ANSWER"
});

export const addCheckbox = () => ({
  type: "ADD_CHECKBOX"
});

export const removeCheckbox = () => ({
  type: "REMOVE_CHECKBOX"
});

export const resetCheckbox = () => ({
  type: "ADD_CHECKBOX"
});

export const allTestsCompleted = completed => ({
  type: "ALL_TESTS_COMPLETED",
  payload: completed
});
