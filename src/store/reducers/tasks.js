import { TASKS } from '../actions/actions'
import { getRandomId } from '../../libs/getRandomId'
import moment from 'moment'

export const tasksState = (state = {}, action) => {
  switch (action.type) {
    case TASKS.SET_ALL_TASKS:
      return {...state, tasks: action.payload}
    case TASKS.SET_CURRENT_TASK: {
        if (!state.tasks) return state
          const currentTask = state.tasks.find(t => t.taskId === action.payload)
        if (currentTask) {
          return { ...state, currentTask }
        } else {
          return { ...state, taskNotExist: true}
        }
      }
    case TASKS.SET_COMMENT: {
        const comment = {
          text: action.payload,
          userName: 'Username',
          date: moment().format("DD.MM.YYYY HH:mm"),
          id: getRandomId()
        }
        const arrayComment = state.currentTask.comment.concat(comment)
        const currentTask = {...state.currentTask, comment: arrayComment}
        const tasks = state.tasks.map(t => {
          if (t.taskId === currentTask.taskId) {
            return currentTask
          }
          return t
        })
        return { ...state, tasks, currentTask}
      }
    case TASKS.SET_EXPERT: {
      let currentStep = state.currentTask.currentStep
      if (currentStep < 2) {
        currentStep = currentStep + 1
      }
      const currentTask = {...state.currentTask, expert: action.payload, currentStep }
      const tasks = state.tasks.map(t => {
        if (t.taskId === currentTask.taskId) {
          return currentTask
        }
        return t
      })
      return { ...state, tasks, currentTask}
    }

    default: return state
  }
}
