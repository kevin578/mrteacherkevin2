import axios from 'axios';
import  { store } from './../index.js';

export * from './auth';
export * from './buttonActions';
export * from './rankings'

export const setPage = (pageNumber) => {
  return (dispatch)=> {
    dispatch({
      type: 'SET_PAGE',
      payload: pageNumber
    },
  )
  }
}

export const setSubjectURL = (subject) => {
  return (dispatch)=> {
    dispatch({
      type: 'SET_SUBJECT_URL',
      subject
    },
  )
  }
}

export const setSubject = (subject) => {
  return (dispatch)=> {
    dispatch({
      type: 'SET_SUBJECT',
      subject
    },
  )
  }
}

export const completeInit = (completeObject)=> {
  return (dispatch)=> {
    dispatch({
      type: 'COMPLETE_INIT',
      payload: completeObject
    })
  }
}

export const completeButton = (pageNumber, subject)=> {
const isLoggedIn = store.getState().auth
if (isLoggedIn) {
  axios.put('/api/editCompletedPages', {
    pageNumber,
    subject,
    store: store.getState().completed
  });
}

  return (dispatch)=> {
    dispatch({
      type: 'COMPLETE_BUTTON',
      pageNumber,
      subject
    })
  }
}










