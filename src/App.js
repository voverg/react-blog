import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRouter} from './components';
import {AuthContext} from './context';

import './styles/App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <div className="App">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
