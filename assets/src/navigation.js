import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Web from './web';
import Home from './home';
import Contact from './contact';
import Prestations from './prestations';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/armor_production/home">Home</Link>
            </li>
            <li>
              <Link to="/armor_production/web">Web</Link>
            </li>
            <li>
              <Link to="/armor_production/prestations">Prestations</Link>
            </li>
            <li>
              <Link to="/armor_production/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/armor_production/web">
            <Web />
          </Route>
          <Route path="/armor_production/prestations">
            <Prestations />
          </Route>
          <Route path="/armor_production/contact">
            <Contact />
          </Route>
          <Route path="/armor_production/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(<Navigation />,document.getElementById('root'));

