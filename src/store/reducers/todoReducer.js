import createReducer from './createReducer'
import * as types from '../actions/types'

export const todoReducer = createReducer({
    todos: []
}, {
    [types.ADDALLTODOS](state, action){
        return {...state, todos: action.payload}
    }
})
