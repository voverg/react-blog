import React from 'react';

import Post from './Post.jsx';

const PostItem = ({posts, title}) => {

  return (
    <div className="post-list">
      <h1 className="post-list__header">{title}</h1>
      { posts.map(post => <Post post={post} key={post.id} />) }
    </div>
  );

};

export default PostItem;
