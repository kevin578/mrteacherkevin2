import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { setPage, completePage, setSubjectURL, changeScore, setSubject,  addAcheievement, checkAnswers } from './pageReducer'



export default combineReducers({
    auth: authReducer,
    page: setPage,
    subject: setSubject,
    subjectURL: setSubjectURL,
    achievements: addAcheievement,
    completed: completePage,
    score: changeScore,
    correct: checkAnswers
})