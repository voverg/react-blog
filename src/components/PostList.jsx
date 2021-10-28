import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Post from './Post.jsx';

const PostList = ({posts, title, removePost}) => {
  if (!posts.length) {
    return (
      <h1 className="post-list__header">Постов не найдено</h1>
    );
  }

  return (
    <div className="post-list">
      <h1 className="post-list__header">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
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
