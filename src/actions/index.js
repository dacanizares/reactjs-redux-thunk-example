import {UsersActionTypes} from '../reducers'
import UsersApi from '../api/UsersApi'

export const fetchingUsers = () => ({
  type: UsersActionTypes.FETCHING_USERS
})

export const receiveUsers = (usersData) => ({
  type: UsersActionTypes.RECEIVE_USERS,
  usersData: usersData
})

export const fetchUsers = () => async (dispatch) =>  {
  dispatch(fetchingUsers())
  const usersApi = new UsersApi()
  const users = await usersApi.find()
  dispatch(receiveUsers(users))    
}