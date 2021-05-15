import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";

import Home from "./container/Home";
import Animals from "./container/Animals";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Tiere" component={Animals}></Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
