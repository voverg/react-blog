import React from 'react';

import Post from './Post.jsx';

const PostList = ({posts, title, removePost}) => {
  const postList = posts.length !== 0
                    ? <React.Fragment>
                        <h1 className="post-list__header">{title}</h1>
                        { posts.map((post, index) => <Post number={index+1} post={post} key={post.id} removePost={removePost} />) }
                      </React.Fragment>
                    : <h1 className="post-list__header">Список постов пуст</h1>

  return (
    <div className="post-list">
      {postList}
    </div>
  );

};

export default PostList;
