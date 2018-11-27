import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Books from './pages/Books';
import Saved from './pages/Saved';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
        <Route exact path = '/' component = {Books} />
        <Route exact path = '/books' component = {Books} />
        <Route exact path = '/books/:id' component = {Saved} />
    </div>
  </BrowserRouter>
)

export default App;
