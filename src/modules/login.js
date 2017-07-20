export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const initialState = {
  isAuthenticated: false,
  fetching:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetching:true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching:false,
        isAuthenticated : true,
        user : action.user
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        error : action.error
      }

    default:
      return state
  }
}


export const signIn = (data) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    })

    dispatch({
      type: LOGIN_SUCCESS,
      user : {'name':'saty '+data.username, 'reason':'demo'}
    })
  }
}