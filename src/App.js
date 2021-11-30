import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRouter} from './components';
import {AuthContext} from './context';

import './styles/App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (localStorage.getItem('blogAuth')) {
      setIsAuth(true);
      setUsername(localStorage.getItem('blogUsername'));
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      username,
    }}>

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

    </AuthContext.Provider>
  );
}

export default App;
