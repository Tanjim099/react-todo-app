import { combineReducers, createStore } from 'redux'
import TodoReducer from './reducers/TodoReducer'

const reducer = combineReducers({ todos: TodoReducer })
const store = createStore(reducer)

export default store