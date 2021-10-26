import React, {useState} from 'react';

import PostList from './components/PostList.jsx';
import BasicButton from './components/UI/button/BasicButton.jsx';
import BasicInput from './components/UI/input/BasicInput.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: '1 post', body: 'This is a first post'},
    {id: 2, title: '2 post', body: 'This is a second post'},
    {id: 3, title: '3 post', body: 'This is a third post'},
  ]);

  return (
    <div className="App">
      <form>
        <BasicInput type="text" placeholder="Введите название поста" />
        <BasicInput type="text" placeholder="Введите описание поста" />
        <BasicButton>Добавить пост</BasicButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
