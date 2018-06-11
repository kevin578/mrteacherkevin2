import axios from 'axios';
import { FETCH_USER, SET_PAGE } from './types';

export const fetchUser = () => {
  return async (dispatch)=> {
    const response = await axios.get('/api/current_user')
    dispatch({ 
        type: FETCH_USER, 
        payload: response.data
    });
  }
};

export const setPage = (pageNumber) => {
  return (dispatch)=> {
    dispatch({
      type: SET_PAGE,
      payload: pageNumber
    })
  }
}



