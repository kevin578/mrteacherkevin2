export const addStartedSubjects = (subjects)=> {
    return {
        type: "ADD_STARTED_SUBJECTS",
        payload: subjects
    };
};

export const addNotStartedSubjects = (subjects)=> {
    return {
        type: "ADD_NOT_STARTED_SUBJECTS",
        payload: subjects
    };
};