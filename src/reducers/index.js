import { combineReducers } from 'redux';

// Action Types
export const UsersActionTypes = {
  FETCHING_USERS: 'FETCHING_USERS',
  RECEIVE_USERS: 'RECEIVE_USERS'
}
  
// Reducer
const users = (state = { usersData: [], loading: false }, action) => {
  switch (action.type) {
  
    case UsersActionTypes.FETCHING_USERS:
      return {
        ...state,        
        loading: true
      }
  
    case UsersActionTypes.RECEIVE_USERS:
    return {
      ...state,
      usersData: action.usersData,
      loading: false
    }
  
    default:
      return state
  }
}
  
export default combineReducers({
  users
})