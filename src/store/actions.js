import {
    INCREMENT,
    DECREMENT,
  } from './types'

export default {
    increment({commit}) {
        commit(INCREMENT)
    },
    decrement({commit},cb) {
        commit(DECREMENT)
    },
    incrementIfOdd({commit,state}) {
        if(state.count%2===1){
            commit(INCREMENT)
        }
    },
    incrementSet({commit}) {
        setInterval(() => {
            commit(INCREMENT)
        },1000)
    }
}