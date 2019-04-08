 
export const addStartedSubjects = (subjects)=> ({
        type: "ADD_STARTED_SUBJECTS",
        payload: subjects
    });

export const addNotStartedSubjects = (subjects)=> ({
        type: "ADD_NOT_STARTED_SUBJECTS",
        payload: subjects
});

export const addComingSoonSubjects = (subjects)=> ({
        type: "ADD_COMING_SOON_SUBJECTS",
        payload: subjects
});