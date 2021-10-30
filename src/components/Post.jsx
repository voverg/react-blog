import React from 'react';

import BasicButton from './UI/BasicButton';

const Post = ({number, removePost, post}) => {
  const {id, title, body} = post;

  return (
    <div className="post">
      <div className="post__content">
        <h3>{id} {title}</h3>
        <div>{body}</div>
      </div>
      <div className="post__btns">
      <BasicButton onClick={() => removePost(post)}>Удалить пост</BasicButton>
      </div>
    </div>
  );

};

export default Post;
