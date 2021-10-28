import React, {useState} from 'react';
import axios from 'axios';

import PostHeader from './components/PostHeader.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import PostFooter from './components/PostFooter.jsx';

import {usePosts} from './hooks/usePosts.js';
import BasicModal from './components/UI/BasicModal';
import BasicButton from './components/UI/BasicButton';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: ' post', body: 'This is a first post'},
    {id: 2, title: ' article', body: 'This is a second post'},
    {id: 3, title: ' notice', body: 'This is a third post'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  }

  return (
    <div className="App">
      <BasicModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </BasicModal>

      <BasicButton
        onClick={fetchPosts}
      >
        Сделать запрос на сервер
      </BasicButton>

      <PostHeader
        filter={filter}
        setFilter={setFilter}
        setModal={setModal}
      />

      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        removePost={removePost}
        filter={filter}
        setFilter={setFilter}
      />

      <PostFooter />

    </div>
  );
}

export default App;
