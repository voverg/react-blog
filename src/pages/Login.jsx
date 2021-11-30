import React, {useState, useContext} from 'react';

import {BasicHeader, BasicFooter, BasicInput, BasicButton} from '../components/UI';
import {AuthContext} from 'context';

const Login = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    if (!username || !password) return;

    setIsAuth(true);
    localStorage.setItem('blogAuth', 'true');
    localStorage.setItem('blogUsername', username);
  }

  return (
    <div className="page">
      <BasicHeader>
        <h1 className="login__title">Авторизация</h1>
      </BasicHeader>

      <div className="page__content">
        <h2 className="page__content-title">Авторизуйтесь, чтобы войти</h2>
        <p className="page__content-title">Для демо входа введите: </p>
        <p className="page__content-title">Логин: <b>user</b> Пароль: <b>123</b></p>

        <form className="login-form" onSubmit={login}>
          <BasicInput
            type="text"
            className="post-form__input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Введите логин..."
          />
          <BasicInput
            type="password"
            className="post-form__input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Введите пароль..."
          />
          <div className="post-form__btns">
            <BasicButton>Войти</BasicButton>
          </div>
        </form>

      </div>

      <BasicFooter />
    </div>
  );
};

export default Login;
