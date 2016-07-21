import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import * as ActionTypes from './actions'

const store = configureStore()

if (window.INITIAL_MAP) {
  store.dispatch(ActionTypes.initializeMap(window.INITIAL_MAP));
  delete window.INITIAL_MAP
}

store.dispatch(ActionTypes.initializeData());

render(
  <Root store={store} />,
  document.getElementById('root')
)
