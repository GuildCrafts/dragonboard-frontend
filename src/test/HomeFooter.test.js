import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/HomeFooter'

it( 'HomeFooter renders without crashing', () => {
  const div = document.createElement( 'div' )
  ReactDOM.render( <HomeFooter />, div )
})
