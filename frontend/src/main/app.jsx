import React from 'react';
import './app.css';

import Logo from '../components/templates/logo';
import Nav from '../components/templates/nav';
import Main from '../components/templates/main';
import Footer from '../components/templates/footer';

export default props => 
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>