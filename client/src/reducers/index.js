import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { setPage, completePage, setSubject } from './pageReducer'

export default combineReducers({
    auth: authReducer,
    page: setPage,
    subject: setSubject,
    completed: completePage
})