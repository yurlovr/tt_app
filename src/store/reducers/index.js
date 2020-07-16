
import { combineReducers } from "redux"
import { tasksState } from './tasks'
import { usersState } from './users'


export const rootReducer = combineReducers({
  tasksState,
  usersState
})