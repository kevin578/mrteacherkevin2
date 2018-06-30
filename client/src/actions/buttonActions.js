export const checkAnswers = (correct, answer) => {
    return (dispatch)=> {
      dispatch({
        type: 'CHECK_ANSWER',
        correct,
        answer
      })
    }
  }
  
  export const resetAnswers = () => {
    return (dispatch)=> {
      dispatch({
        type: 'RESET_ANSWER',
      })
    }
  }

  export const addCheckbox = () => {
    return (dispatch)=> {
      dispatch({
        type: 'ADD_CHECKBOX'
      })
    }
  }

  export const removeCheckbox = () => {
    return (dispatch)=> {
      dispatch({
        type: 'REMOVE_CHECKBOX'
      })
    }
  }

  export const resetCheckbox = () => {
    return (dispatch)=> {
      dispatch({
        type: 'RESET_CHECKBOX'
      })
    }
  }