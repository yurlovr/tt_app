import { USERS } from '../actions/actions'
// import { setStorage } from '../../libs/localStorage'

export const usersState = (state = {}, action) => {
  switch (action.type) {
    case USERS.SET_ALL_USERS:
      return {...state, users: action.payload}
    case USERS.SET_CURRENT_USER: {
        if (!state.users) return state
          const currentUser = state.users.find(u => u.key === action.payload)
          return { ...state, currentUser }
        }
    // case TASKS.SET_COMMENT: {
    //     const comment = {
    //       text: action.payload,
    //       userName: 'Username',
    //       date: moment().format("DD.MM.YYYY HH:mm"),
    //       id: getRandomId()
    //     }
    //     const arrayComment = state.currentTask.comment.concat(comment)
    //     const currentTask = {...state.currentTask, comment: arrayComment}
    //     const tasks = state.tasks.map(t => {
    //       if (t.taskId === currentTask.taskId) {
    //         return currentTask
    //       }
    //       return t
    //     })
    //     setStorage(tasks)
    //     return { ...state, tasks, currentTask}
    //   }
    // case TASKS.SET_EXPERT: {
    //   let currentStep = state.currentTask.currentStep
    //   if (currentStep < 2) {
    //     currentStep = currentStep + 1
    //   }
    //   const currentTask = {...state.currentTask, expert: action.payload, currentStep }
    //   const tasks = state.tasks.map(t => {
    //     if (t.taskId === currentTask.taskId) {
    //       return currentTask
    //     }
    //     return t
    //   })
    //   setStorage(tasks)
    //   return { ...state, tasks, currentTask}
    // }

    default: return state
  }
}
