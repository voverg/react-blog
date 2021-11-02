import React, {useContext} from 'react';

import {BasicHeader, BasicFooter, BasicInput, BasicButton} from '../components/UI';
import {AuthContext} from '../context';

const Login = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();

    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div className="page">
      <BasicHeader>
        <h1 className="login__title">Авторизация</h1>
      </BasicHeader>

      <div className="page__content">
        <h2 className="page__content-title">Просто нажмите кнопку [Войти]</h2>

        <form className="login-form" onSubmit={login}>
          <BasicInput
            type="text"
            className="post-form__input"
            placeholder="Введите логин..."
          />
          <BasicInput
            type="password"
            className="post-form__input"
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
