import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Page from './page';
import Accueil from './accueil';
import Contact from "./contact";
import {Helmet} from "react-helmet";

class Navigation extends React.Component{
  constructor(){
    super();
  }
  render(){
    const pages = JSON.parse(this.props.propsPages);
    return (
      <Router>
        <Helmet>
            <script src="assets/js/sidebar_mobile.js"></script>
        </Helmet>
        <div className="bg-black text-gray-100 flex justify-between md:hidden">
          <Link to="/" className="block p-4" replace>
            <img className="w-40" src="assets/images/LOGO ARMOR PROD copyright MATTEO LATRUFFE.png" placeholder="logo (avec ou sans texte)"/>
          </Link>
          <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <aside className="h-full sticky top-0 float-left">
          <div className=" z-40 h-screen sidebar bg-black text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <Link to="/" className="block p-4 text-white font-bold flex justify-center items-center " replace>
              <img src="assets/images/LOGO ARMOR PROD copyright MATTEO LATRUFFE.png" placeholder="logo avec texte"/>
            </Link>
            <nav>
              <Link to="/" replace >
                <span className="flex justify-center items-center mt-5 py-2 px-8 text-white mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">
                  Accueil
                </span>
              </Link>
              {
                pages.map((pages)=>{
                  if(pages.ID!=1){
                  return(
                    <Link key={pages.ID} to={"/"+pages.TITLE} replace >
                      <span className="flex justify-center items-center mt-5 py-2 px-8 text-white mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">
                        {pages.TITLE}
                      </span>
                    </Link>
                  );
                  }
                })
              }
              <Link to="/contact" replace ><span className="flex justify-center items-center mt-5 py-2 px-8 text-white mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">Contact</span></Link>
            </nav>
          </div>
        </aside>
        <div className="justify-center items-center flex">
          <Switch>
            <Route path="/" exact component={props => <Accueil propsPages={pages[0]} />} />
            {
              pages.map((pages)=>{
                if(pages.ID!=1){
                  return(
                    <Route key={pages.ID} path={"/"+pages.TITLE} exact component={props => <Page propsPages={pages}/>} />
                  );
                }
              })
            }
            <Route path="/contact" exact component={props => <Contact />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const domContainer = document.getElementById("navbar");

const pages = domContainer.innerHTML;

ReactDOM.render(<Navigation propsPages={pages}/>,domContainer);

