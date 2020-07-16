import { createStore } from 'redux'
import { initialState } from './initialState'
import { rootReducer } from './reducers/index'

export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store