import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./container/Home";
import Animals from "./container/Animals";

function App() {
  return (
    <Router>
      <div className="bg-red-400 App">
        <Navigation/>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Tiere" component={Animals}></Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
