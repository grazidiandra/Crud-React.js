import React from 'react';
import './logo.css';
import logo from '../../assets/imgs/logo.jpeg'

export default props => 
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </aside>
