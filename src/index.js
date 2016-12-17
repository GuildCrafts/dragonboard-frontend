import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'

import './styles/index.css'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path='/' component={ Landing } />
    <Route path='/dashboard' component={ Dashboard } />
  </Router>
), document.getElementById( 'root' ))
