import { USERS } from './actions'

export const setAllUsers = (users) => ({ type: USERS.SET_ALL_USERS, payload: users })
export const setCurrentUser = (userId) => ({ type: USERS.SET_CURRENT_USER, payload: userId })
export const setUpdateUser = (userProps) => ({ type: USERS.SET_UPDATE_USER, payload: userProps })
