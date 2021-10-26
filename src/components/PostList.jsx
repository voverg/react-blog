import React from 'react';

import Post from './Post.jsx';

const PostList = ({posts, title, removePost}) => {

  return (
    <div className="post-list">
      <h1 className="post-list__header">{title}</h1>
      { posts.map((post, index) => <Post number={index+1} post={post} key={post.id} removePost={removePost} />) }
    </div>
  );

};

export default PostList;
