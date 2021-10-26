import React from 'react';

const Post = (props) => {
  const {title, body} = props.post;

  return (
    <div className="post">
      <div className="post__content">
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Delete post</button>
      </div>
    </div>
  );

};

export default Post;
