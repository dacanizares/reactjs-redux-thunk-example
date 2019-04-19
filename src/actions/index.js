import { UsersActionTypes } from '../reducers'
import { findUsers } from '../api/UsersApi'

export const fetchingUsers = () => ({
  type: UsersActionTypes.FETCHING_USERS
})

export const receiveUsers = (usersData) => ({
  type: UsersActionTypes.RECEIVE_USERS,
  payload: usersData
})

export const fetchUsers = () => async (dispatch) =>  {
  dispatch(fetchingUsers())
  const users = await findUsers()
  dispatch(receiveUsers(users))    
}