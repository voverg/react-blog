import React, {useState} from 'react';

import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: ' post', body: 'This is a first post'},
    {id: 2, title: ' post', body: 'This is a second post'},
    {id: 3, title: ' post', body: 'This is a third post'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    console.log(post);
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <PostList
        posts={posts}
        title="Список постов 1"
        removePost={removePost}
      />
    </div>
  );
}

export default App;
