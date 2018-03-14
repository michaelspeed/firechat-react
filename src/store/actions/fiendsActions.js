import * as types from './types'

export function addFriends(payload){
    return {
        type: types.ADDFRIENDS,
        payload
    }
}