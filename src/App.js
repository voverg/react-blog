import React, {useState} from 'react';

import PostList from './components/PostList.jsx';
import BasicButton from './components/UI/button/BasicButton.jsx';
import BasicInput from './components/UI/input/BasicInput.jsx';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: ' post', body: 'This is a first post'},
    {id: 2, title: ' post', body: 'This is a second post'},
    {id: 3, title: ' post', body: 'This is a third post'},
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (event) => {
    event.preventDefault();
    if (!post.title || !post.body) return;

    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };

    // Добавляем новый пост в массив с постами
    setPosts([...posts, newPost]);
    console.log(newPost);

    setPost({...posts, title: '', body: ''});
  };

  return (
    <div className="App">
      <form>
        <BasicInput
          type="text"
          placeholder="Введите название поста"
          value={post.title}
          onChange={ event => setPost({...post, title: event.target.value}) }
        />
        <BasicInput
          type="text"
          placeholder="Введите описание поста"
          value={post.body}
          onChange={ event => setPost({...post, body: event.target.value}) }
        />
        <BasicButton onClick={addNewPost}>Добавить пост</BasicButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
