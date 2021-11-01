import React, {useContext} from 'react';

import {PostFooter} from '../components';
import {BasicHeader, BasicInput, BasicButton} from '../components/UI';
import {AuthContext} from '../context';

const Login = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();

    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <React.Fragment>
      <BasicHeader className="about__nav">
        <div className="nav-item container">
          <h1 className="login__title">Авторизация</h1>
        </div>
      </BasicHeader>

      <div className="about post-list container">
        <h2 className="post-list__title">Чтобы войти, введите логин и пароль</h2>

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

      <PostFooter />
    </React.Fragment>
  );
};

export default Login;
