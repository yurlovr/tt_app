import { TASKS } from './actions'

export const setAllTasks = (tasks) => ({ type: TASKS.SET_ALL_TASKS, payload: tasks })
export const setCurrentTask = (taskId) => ({ type: TASKS.SET_CURRENT_TASK, payload: taskId })
export const setComment = (comment) => ({ type: TASKS.SET_COMMENT, payload: comment })
export const setExpert = (expert) => ({ type: TASKS.SET_EXPERT, payload: expert })
