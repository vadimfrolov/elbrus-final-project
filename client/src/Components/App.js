import React from "react";

import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import FBpanel from "./FBpanel";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import ConcertYear from "./Concert-by-artist/ConcertYear"

const App = () => (
   
  <div>
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fbpanel" component={FBpanel} />
      <Route  path="/landing" component={LandingPage} />
      <Route  path="/concerts" component={ConcertYear} />
    </Switch>
    </Router>
  </div>

);

export default App;
