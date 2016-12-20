import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'

import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import reducer from './reducers'
import AccountDetailsPage from './components/AccountDetailsPage'

import './styles/index.css'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ Landing } />
      <Route path='dashboard' component={ Dashboard } />
      <Route path='/account' component={AccountDetailsPage} />
    </Router>
  </Provider>
), document.getElementById('root'))
