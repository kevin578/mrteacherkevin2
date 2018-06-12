import axios from 'axios';

// export const FETCH_USER = 'fetch_user';
// export const SET_PAGE = 'set_page';
// export const SET_SUBJECT = 'set_subject';
// export const COMPLETE_BUTTON = 'complete_button';


export const fetchUser = () => {
  return async (dispatch)=> {
    const response = await axios.get('/api/current_user')
    dispatch({ 
        type: 'FETCH_USER', 
        payload: response.data
    });
  }
};

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

export const completeButton = (pageNumber, subject)=> {
  return (dispatch)=> {
    dispatch({
      type: 'COMPLETE_BUTTON',
      pageNumber,
      subject
    })
  }
}

export const addAchievemnet = (ranking, subject)=> {
  return (dispatch)=> {
    dispatch({
      type: 'SUBJECT_RANKING',
      ranking,
      subject
    })
  }
}

export const changeScore = (change)=> {
    return (dispatch)=> {
      dispatch({
        type: 'CHANGE_SCORE',
        change
      })
    }
}









