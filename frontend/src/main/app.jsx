import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app.css';

import Logo from '../components/templates/logo';
import Nav from '../components/templates/nav';
import Main from '../components/templates/main';
import Footer from '../components/templates/footer';

export default props => 
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" title="Início" subtitle="Projeto React.js"/>
    <Footer />
  </div> 