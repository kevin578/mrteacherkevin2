import {SET_PAGE, COMPLETE_BUTTON, SET_SUBJECT} from './../actions'

export function setPage(state = null, action) {
    switch (action.type) {
        case SET_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export function setSubject(state = null, action) {
    switch (action.type) {
        case SET_SUBJECT:
            return action.subject;
        default:
            return state;
    }
}

export function completePage(state = {}, action) {
    
    let stateCopy = { ...state }
    const subject = action.subject;
    const pageNumber = action.pageNumber;
    

    switch (action.type) {
        case COMPLETE_BUTTON:
            if (subject in stateCopy && !stateCopy[subject].includes(pageNumber)) {
                stateCopy[subject].push(pageNumber)
            }
            else if (!(subject in stateCopy)) {
                stateCopy[subject] = [pageNumber]
            }
            
            return stateCopy
            
        default:
            return state
    }
}

