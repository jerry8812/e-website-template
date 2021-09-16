import React from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer'
import About from './pages/About'
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Product from './pages/Product';

import './sass/app.scss'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBarContainer />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/product/:type" component={Product}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
