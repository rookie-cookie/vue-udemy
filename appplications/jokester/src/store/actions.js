// https://official-joke-api.appspot.com/random_ten

//actions commit the mutations
//mutations are the modifiers
//actions are the functions that sends signals to vuex to perform a modification thru a mutation

import * as types from './mutation-types'

export const initJokes = ({commit}) => {
  fetch('https://official-joke-api.appspot.com/random_ten', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.INIT_JOKES, json))
}


export const addJoke = ({commit}) => {
  fetch('https://official-joke-api.appspot.com/random_joke', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.ADD_JOKE, json))
}


export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}
