import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Map from './Map'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;
