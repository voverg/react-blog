import React, {useContext} from 'react';

import {BasicHeader, Navbar, BasicButton, BasicInput} from './UI';

const PostHeader = ({filter, setFilter, setModal}) => {

  return (
    <BasicHeader>
      <h1 className="page__header-title">Посты</h1>
      <Navbar />

      <div className="page__header-content">
        <BasicButton
          className="add-post__btn"
          onClick={() => setModal(true)}
        >
          Создать пост
        </BasicButton>

        <BasicInput
          type="text"
          className="page__header-search"
          placeholder="Поиск..."
          value={filter.query}
          onChange={ event => setFilter({...filter, query: event.target.value}) }
        />
      </div>

    </BasicHeader>
  );
};

export default PostHeader;
