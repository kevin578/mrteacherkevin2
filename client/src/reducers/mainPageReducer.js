const defaultState = {
    startedSubjects: [],
    notStartedSubjects: [],
    comingSoonSubjects: []
};

export default function mainPageRedcuer(state=defaultState, action) {
    switch(action.type) {
        case ("ADD_STARTED_SUBJECTS"):
            return {...state, startedSubjects: action.payload}

        default: 
            return state;
    }

}