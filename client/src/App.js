import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Books from "./pages/Books/Books";
import Saved from "./pages/Saved/Saved";


const App = () => (
  <Router>
    <div>
        <NavTabs />
        <Switch>
          <Route exact path = "/" component = {Books} />
          <Route exact path = "/books" component = {Saved} />
        </Switch>
    </div>
  </Router>
);

export default App; 
