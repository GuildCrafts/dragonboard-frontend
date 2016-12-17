import React from 'react'
import ReactDOM from 'react-dom'

import Landing from '../../components/landing/Landing'
import Footer from '../../components/landing/Footer'

it( 'renders without crashing', () => {
  const div = document.createElement( 'div' )
  ReactDOM.render( <Landing />, div )
})

it( 'Landing\'s Footer renders without crashing', () => {
  const div = document.createElement( 'div' )
  ReactDOM.render( <Footer />, div )
})
