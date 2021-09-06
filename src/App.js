import React from 'react'
import './sass/app.scss'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
