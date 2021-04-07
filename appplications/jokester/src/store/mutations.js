import * as types from './mutation-types'  //* grabs all the exported constants at once and make them accessible w/in one variable called types


export const mutations = {
  [types.INIT_JOKES] (state, payload) {  //payload represents the data object (ie array of jokes) the mutation receives in order to modify the state
    state.jokes.push(...payload)
  },
  [types.ADD_JOKE] (state, payload){
    state.jokes.push(payload)
  }
}
