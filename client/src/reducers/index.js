import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { setPage, completePage, setSubject, changeScore  } from './pageReducer'

export default combineReducers({
    auth: authReducer,
    page: setPage,
    subject: setSubject,
    completed: completePage,
    score: changeScore
})