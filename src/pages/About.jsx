import React, {useContext} from 'react';

import {BasicHeader, Navbar, BasicFooter} from '../components/UI';

const About = (props) => {

  return (
    <div className="page">
      <BasicHeader>
        <h1 className="page__header-title">О блоге</h1>
        <Navbar />
      </BasicHeader>

      <div className="page__content container">
        <h2 className="page__content-title">Это учебный проект, созданный на React.</h2>
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

      <BasicFooter />
    </div>
  );
};

export default About;
