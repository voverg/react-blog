import React from 'react';
import {useHistory} from 'react-router-dom';

import BasicButton from './UI/BasicButton';

const Post = ({number, removePost, post}) => {
  const {id, title, body} = post;
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content" onClick={() => router.push(`/posts/${id}`)}>
        <h3 className="post__title">{id} {title}</h3>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <BasicButton onClick={() => removePost(post)}>Удалить пост</BasicButton>
      </div>
    </div>
  );

};

export default Post;
