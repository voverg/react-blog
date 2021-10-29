import React, {useState, useEffect} from 'react';

import PostHeader from './components/PostHeader.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import PostFooter from './components/PostFooter.jsx';

import {usePosts} from './hooks/usePosts.js';
import PostService from './API/PostService.js';
import BasicModal from './components/UI/BasicModal';
import Loader from './components/UI/Loader';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  return (
    <div className="App">
      <BasicModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} visible={modal} />
      </BasicModal>

      <PostHeader
        filter={filter}
        setFilter={setFilter}
        setModal={setModal}
      />

      {isPostsLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : <PostList
            posts={sortedAndSearchedPosts}
            title="Список постов"
            removePost={removePost}
            filter={filter}
            setFilter={setFilter}
          />
      }

      <PostFooter />

    </div>
  );
}

export default App;
