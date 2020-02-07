import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import JobIndex from './screens/JobIndex'
import RoleShow from './screens/roleShow'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={JobIndex} />
      <Route exact path='/jobs/:category' component={RoleShow} />
    </Switch>
  </Router>
)
