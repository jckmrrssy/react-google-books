import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs/NavTabs'
import Books from './pages/Books/Books';
import Saved from './pages/Saved/Saved';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
        <NavTabs />
        <Route exact path = '/' component = {Books} />
        <Route exact path = '/books' component = {Saved} />
    </div>
  </BrowserRouter>
);

export default App;
