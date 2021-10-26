import React from 'react';

import BasicButton from './UI/button/BasicButton.jsx';

const Post = (props) => {
  const {title, body} = props.post;

  return (
    <div className="post">
      <div className="post__content">
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
      <div className="post__btns">
      <BasicButton disabled>Удалить пост</BasicButton>
      </div>
    </div>
  );

};

export default Post;
