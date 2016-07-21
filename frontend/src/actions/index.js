import axios from 'axios'

export const MAP_INITIALIZE = 'MAP_INITIALIZE'
export const POKEMON_NEW_BUNCH = 'POKEMON_NEW_BUNCH'

export function initializeMap({ lat, lng, apiKey }) {
  return {
    type: MAP_INITIALIZE,
    payload: { lat, lng, apiKey }
  }
}

export function initializeData() {
  return (dispatch, getState) => {
    axios.get('/pokemons')
      .then((response) => {
        dispatch(newBunchPokemons(response.data))
      })
  }
}

function newBunchPokemons(pokemons) {
  return {
    type: POKEMON_NEW_BUNCH,
    payload: pokemons
  }
}
