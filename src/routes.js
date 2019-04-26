import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
  
export default (
  <Switch> 
    <Route component = { Dashboard } path='/' exact /> 
    <Route  component = { Wizard } path = '/wizard' /> 
  </Switch>
//dashboard/ wizard route paths 
)

// Dashboard should have '/' for its path.
// Wizard should have '/wizard' for its path.








