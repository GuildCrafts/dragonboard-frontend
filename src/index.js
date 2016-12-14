import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'

import './styles/index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/dashboard' component={Dashboard} />
  </Router>
), document.getElementById('root'))
