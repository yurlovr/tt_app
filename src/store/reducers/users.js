import { USERS } from '../actions/actions'
import { setStorage } from '../../libs/localStorage'
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
      const currentUser = { ...state.currentUser, name: newUserName, info: currentUserInfo}

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
