import React from 'react';

import BasicButton from './UI/button/BasicButton.jsx';

const Post = ({number, removePost, post}) => {
  const {title, body} = post;

  return (
    <div className="post">
      <div className="post__content">
        <h2>{number} {title}</h2>
        <div>{body}</div>
      </div>
      <div className="post__btns">
      <BasicButton onClick={() => removePost(post)}>Удалить пост</BasicButton>
      </div>
    </div>
  );

};

export default Post;
