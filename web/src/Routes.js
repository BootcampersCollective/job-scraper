import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Test from './screens/test'

const Sample = ()=>{
  return <h1>Sample Functional Component</h1>
}

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" exact component={ Test } />
      <Route exact path="/front-end" exact component={ Sample } />
      <Route exact path="/front-end" exact component={ Sample } />
      <Route exact path="/front-end" exact component={ Sample } />
    </Switch>
  </Router>
)
