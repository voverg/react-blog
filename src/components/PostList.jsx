import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Post from './Post.jsx';
import {BasicSelect} from './UI';

const PostList = ({posts, title, removePost, filter, setFilter, limit, setLimit}) => {
  if (!posts.length) {
    return (
      <div className="page__content post-list container">
        <h2 className="page__content-title">Постов не найдено</h2>
      </div>
    );
  }

  return (
    <div className="page__content post-list container">
      <div className="post-list__header">
        <h2 className="post-list__title">{title}</h2>

        <div className="post-list__selects">
          <BasicSelect
            defaultValue="Кол-во постов"
            value={limit}
            onChange={value => setLimit(value)}
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 15, name: '15'},
              {value: 20, name: '20'},
              {value: -1, name: 'Все посты'},
            ]}
          />
          <BasicSelect
            defaultValue="Сортировка"
            value={filter.sort}
            onChange={ selectedSort => {setFilter({...filter, sort: selectedSort})} }
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
            ]}
          />
        </div>

      </div>

      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={100}
            classNames="post"
          >
            <Post number={index+1} post={post} removePost={removePost} />
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  );

};

export default PostList;
