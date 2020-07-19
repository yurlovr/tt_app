import { USERS } from '../actions/actions'
import { setStorage, getStorage } from '../../libs/localStorage'
import { USER_PROPS } from '../../const/users'

export const usersState = (state = {}, action) => {
  switch (action.type) {
    case USERS.SET_ALL_USERS:
      if (!action.payload) return state
      const users = action.payload.map(u => {
        return {...u, hasButton: true}
      })
      return {...state, users}
    case USERS.SET_CURRENT_USER: {
        if (!state.users) return state
          const currentUser = state.users.find(u => u.key === action.payload)
          return { ...state, currentUser }
        }
    case USERS.SET_UPDATE_USER: {
      const arrayKesPayload = Object.keys(action.payload)
      const currentUserInfo = state.currentUser.info.map(p => {
        const currentProp = arrayKesPayload.find(key => key.toLowerCase() === p.property.toLowerCase())
        if (action.payload[currentProp]) {
          return { ...p, desctiption: action.payload[currentProp]}
        }
        return p
      })
      const newUserName = currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.SURNAME.toLowerCase()).desctiption + ' ' +
                          currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.NAME.toLowerCase()).desctiption + ' ' +
                          currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.LAST_NAME.toLowerCase()).desctiption

      if (state.currentUser.openTasks.length) {
      // Этот блок нужен так как нет бэка, обновление данных пользователя в задаче должен делать бэк и присылать на фронт
      //начало
        let tasks = getStorage('tasks')
        const setTasks = (tasks) => {
        let currentTasks =  tasks.find(task => task.userId === state.currentUser.key)
          const currentTasksInfo = currentTasks && currentTasks.info.map(i => {
            if (i.desctiption ===  state.currentUser.name) {
              return {
                ...i,
                desctiption: newUserName
              }
            }
            if (i.desctiption === state.currentUser.account && i.userKey === state.currentUser.key) {
              return {
                ...i,
                desctiption: currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.ACCOUNT.toLowerCase()).desctiption
              }
            }
            if (i.desctiption === state.currentUser.phone && i.userKey === state.currentUser.key) {
              return {
                ...i,
                desctiption: currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.PHONE.toLowerCase()).desctiption
              }
            }

            if (i.desctiption === state.currentUser.status && i.userKey === state.currentUser.key) {
              return {
                ...i,
                desctiption: currentUserInfo.find(u => u.property.toLowerCase() === USER_PROPS.STATUS.toLowerCase()).desctiption
              }
            }
            return i
          })
          currentTasks = {...currentTasks, info: currentTasksInfo}
          tasks = tasks.map(t => {
            if (t.taskId === currentTasks.taskId) {
              return currentTasks
            }
            return t
          })
          setStorage('tasks',tasks)
      }
        if (!tasks)  {
          fetch('../tasks.json')
          .then(res => res.json())
          .then(json => setTasks(json))
        } else {
          setTasks(tasks)
        }
      }
      let currentUser = { ...state.currentUser, name: newUserName, info: currentUserInfo}

      if (action.payload[USER_PROPS.ACCOUNT]) {
        currentUser = { ...currentUser, account: action.payload[USER_PROPS.ACCOUNT]}
      }

      if (action.payload[USER_PROPS.PHONE]) {
        currentUser = { ...currentUser, phone: action.payload[USER_PROPS.PHONE]}
      }

      if (action.payload[USER_PROPS.STATUS]) {
        currentUser = { ...currentUser, status: action.payload[USER_PROPS.STATUS]}
      }
      //конец

      const users = state.users.map(u => {
        if (u.key === currentUser.key) {
          return currentUser
        }
        return u
      })
      setStorage('users', users)
      return { ...state, users, currentUser }
      }
    default: return state
  }
}
