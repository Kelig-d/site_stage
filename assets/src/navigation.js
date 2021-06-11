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
      <div className="bg-gray-200">
        <div className="flex flex-col sm:flex-row">
          <div className="w-64 h-screen bg-gray-800 mt-8 sm:mt-0">
            <div className="flex items-center justify-center mt-10">
              <img className="h-6" src="" />
            </div>
            <nav className="mt-10">
                <Link to="/Armor_productions/front_end" className="divide-y divide-gray-300"><span className="flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110 ">Home<span className="nav-underline"></span></span></Link>
                <Link to="/Armor_productions/front_end/web"><span className="flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">Web</span></Link>
                <Link to="/Armor_productions/front_end/prestations"><span className="flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">Prestations</span></Link>
                <Link to="/Armor_productions/front_end/contact"><span className="flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">Contact</span></Link>
            </nav>
          </div>
        </div></div>

        <Switch>
          <Route exact path="/Armor_productions/front_end/web">
            <Web />
          </Route>
          <Route exact path="/Armor_productions/front_end/prestations">
            <Prestations />
          </Route>
          <Route exact path="/Armor_productions/front_end/contact">
            <Contact />
          </Route>
          <Route exact path="/Armor_productions/front_end/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(<Navigation />,document.getElementById('root'));

