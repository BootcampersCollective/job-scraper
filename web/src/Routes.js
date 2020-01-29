import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import JobIndex from './screens/test'
import RoleShow from './screens/roleShow'

const Sample = () => (<h1>Sample Functional Component</h1>)

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ JobIndex } />
      <Route exact path="/front-end" component={ RoleShow } />
      <Route exact path="/back-end" component={ Sample } />
      <Route exact path="/qa" component={ Sample } />
    </Switch>
  </Router>
)
