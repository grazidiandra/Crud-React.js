import React, { Fragment } from 'react';
import './main.css';
import Header from './header';

export default props => 
  <Fragment>
    <Header {...props}/>
    <main className="content conteiner-fluid">
      <div className="p-3 mt-3">
        {props.children}
      </div>
    </main>
  </Fragment>
