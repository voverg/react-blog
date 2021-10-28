import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Post from './Post.jsx';
import PostSelect from './PostSelect.jsx';

const PostList = ({posts, title, removePost, filter, setFilter}) => {
  if (!posts.length) {
    return (
      <h2 className="post-list post-list__title">Постов не найдено</h2>
    );
  }

  return (
    <div className="post-list">
      <div className="post-list__header">
        <h2 className="post-list__title">{title}</h2>
        <PostSelect
          filter={filter}
          setFilter={setFilter}
        />
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
