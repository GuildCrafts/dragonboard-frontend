import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import App from './App'
import Dashboard from './Dashboard'
import DashboardBody from './DashboardBody'
import DashWidgets from './DashWidgets'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="DashboardBody" component={DashboardBody} />
      <Route path="DashWidgets" component={DashWidgets} />
    </Route>
  </Router>
)
