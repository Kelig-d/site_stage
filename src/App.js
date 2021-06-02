
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Web from './pages/Web';
import Prestation_multimedias from './pages/Prestation_multimedias';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/web" component={Web}></Route>
      <Route exact path="/prestations_autre" component={Prestation_multimedias}></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
