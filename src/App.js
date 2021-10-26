import React, {useState} from 'react';

import PostList from './components/PostList.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: '1 post', body: 'This is a first post'},
    {id: 2, title: '2 post', body: 'This is a second post'},
    {id: 3, title: '3 post', body: 'This is a third post'},
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
