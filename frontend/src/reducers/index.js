import { combineReducers } from 'redux'
import mapProperties from './mapProperties'
import pokemons from './pokemons'

const rootReducer = combineReducers({
  mapProperties,
  pokemons
})

export default rootReducer
