import React, {useContext} from 'react';

import {PostFooter} from '../components';
import {BasicHeader, Navbar, BasicButton} from '../components/UI';
import {AuthContext} from '../context';

const About = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
  }


  return (
    <React.Fragment>
      <BasicHeader className="about__nav">
        <div className="container container-flex">
          <div className="nav-item">
            <h1 className="about__title">О блоге</h1>
          </div>
          <div className="nav-item">
            <Navbar />
          </div>

          <BasicButton
            className="logout__btn"
            onClick={logout}
          >
            Выйти
          </BasicButton>
        </div>

      </BasicHeader>

      <div className="about post-list container">
        <h2 className="post-list__title">Это учебный проект, созданный на React.</h2>
        <h3 className="">Здесь вы можете:</h3>
        <ul className="about__list">
          <li className="about__list-item">Смотреть списко постов</li>
          <li className="about__list-item">Смотреть содержимое каждого поста по клику на него</li>
          <li className="about__list-item">Смотреть комментарии к посту</li>
          <li className="about__list-item">Сортировать список постов по названию, либо описанию</li>
          <li className="about__list-item">Осуществлять поиск по названию поста</li>
          <li className="about__list-item">Добавлять пост</li>
          <li className="about__list-item">Удалять пост</li>
          <li className="about__list-item">Сайт адаптирован для мобильных устройств</li>
        </ul>
      </div>

      <PostFooter />
    </React.Fragment>
  );
};

export default About;
