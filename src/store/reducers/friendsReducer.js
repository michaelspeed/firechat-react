import createReducer from './createReducer'
import * as types from '../actions/types'

export const friendReducer = createReducer({
    friends: []
}, {
    [types.ADDFRIENDS](state, action){
        return {...state, friends: action.payload}
    }
})
