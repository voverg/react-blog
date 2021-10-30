import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {AppRouter} from './components';
import {Navbar, BasicHeader} from './components/UI';

import './styles/App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <BasicHeader>
          <Navbar />
        </BasicHeader>

        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
