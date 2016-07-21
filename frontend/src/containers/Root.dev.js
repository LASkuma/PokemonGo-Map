import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import Map from './Map'

const Root = ({ store }) => {
  return (
      <Provider store={store}>
        <div>
          <Map />
          <DevTools />
        </div>
      </Provider>
    )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
