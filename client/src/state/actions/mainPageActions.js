    // startedSubjects.sort(function(a, b) {
    //   if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
    //   if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
    //   return 0;
    // });





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

export const addComingSoonSubjects = (subjects)=> {
    return {
        type: "ADD_COMING_SOON_SUBJECTS",
        payload: subjects
    };
};