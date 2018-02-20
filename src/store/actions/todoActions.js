import * as types from './types'

export function addAllToDos(payload){
    return {
        type: types.ADDALLTODOS,
        payload
    }
}