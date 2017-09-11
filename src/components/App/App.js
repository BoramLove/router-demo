import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
