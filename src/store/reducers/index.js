import {todoReducer} from './todoReducer'
import {friendReducer} from './friendsReducer'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
    todo: todoReducer,
    friends: friendReducer
})