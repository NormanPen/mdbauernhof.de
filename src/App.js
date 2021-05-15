import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./container/Home";
import About from "./container/About";
import Program from "./container/Program";
import Animals from "./container/Animals";
import Contact from "./container/Contact";


function App() {
  return (
    <Router>
      <div className="bg-red-400 App">
        <Navigation/>
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
