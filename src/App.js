import React, { Suspense, lazy }from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/header/NavBar'
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';

import './sass/app.scss';

const Home = lazy(()=> import('./pages/Home'))
const Product = lazy(()=> import('./pages/Product'))
const About = lazy(()=> import('./pages/About'))

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Suspense fallback={<Loading/>}>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/product/:type" component={Product}/>
            <Redirect to="/home"/> 
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
