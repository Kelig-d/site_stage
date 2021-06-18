import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Page from './page';
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import {Helmet} from "react-helmet";

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }


      render(){
          
    const pages = JSON.parse(this.props.propsPages);
  return (
      <Router>
    <div className="relative min-h-screen md:flex">
        <Helmet>
            <script src="assets/js/sidebar_mobile.js"></script>
        </Helmet>
    {/* mobile menu bar */}
    <div className="bg-black text-gray-100 flex justify-between md:hidden">
      {/* logo */}
      <Link to="/Armor_production/" className="block p-4 text-white font-bold">Armor productions</Link>
      {/* mobile menu button */}
      <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    {/* sidebar */}
    <div className="z-40 sidebar bg-black text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* logo */}
      <Link to="/armor_productions/" className="block p-4 text-white font-bold flex justify-center items-center ">Armor productions</Link>
      {/* nav */}
      <nav>
      {
        pages.map((pages)=>{
            return(
                <Link key={pages.ID} to={"/Armor_productions/"+pages.TITLE} >
                    <span className="flex justify-center items-center mt-5 py-2 px-8 text-white mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110">{pages.TITLE}</span>
                </Link>
            );
        })
      }
      </nav>
    </div>
    {/* content */}
    <Switch>
        <Route path="/Armor_productions/" exact component={props => <Page propsPages={pages[0]} />} />
        {
            pages.map((pages)=>{
                return(
                    <Route key={pages.ID} path={"/Armor_productions/"+pages.TITLE} exact component={props => <Page propsPages={pages}/>} />
                );
            })
        }
        </Switch>
  </div>
  </Router>
  );
}
}

const domContainer = document.getElementById("navbar");

const pages = domContainer.innerHTML;

ReactDOM.render(<Navigation propsPages={pages}/>,domContainer);

