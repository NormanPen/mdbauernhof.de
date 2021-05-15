import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

import Home from "./container/Home";
import About from "./container/About";
import Program from "./container/Program";
import Animals from "./container/Animals";
import Contact from "./container/Contact";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resize");
      }
    };
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  
  return (
    <Router>
      <div className="bg-red-400 App">

        <Navigation toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/program" component={Program}></Route>
        <Route path="/tiere" component={Animals}></Route>
        <Route path="/kontakt" component={Contact}></Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
