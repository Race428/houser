import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import Header from './Components/Header/Header'
import {HashRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <div className="App">
      <Switch>
        <Route path = '/' exact component = { Dashboard } />
        <Route path ='/wizard' component = {Wizard }/> 
        <Header />
      </Switch>
        
      </div>
    </HashRouter>
  );
}

export default App;
