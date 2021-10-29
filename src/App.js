import React, {useState, useEffect} from 'react';

import PostHeader from './components/PostHeader.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import PostFooter from './components/PostFooter.jsx';

import BasicModal from './components/UI/BasicModal';
import Loader from './components/UI/Loader';

import PostService from './API/PostService.js';
import {getPageCount} from './utils/pages.js';
import {usePosts} from './hooks/usePosts.js';
import {useFetching} from './hooks/useFetching.js';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // Выводим посты при загрузке страницы
  useEffect(() => {
    fetchPosts();
  }, []);

  // Принимает новый созданный пост. Пересоздаёт массив с добавленным новым постом.
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Принимает пост. Пересоздаёт массив с удалённым постом.
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
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

      {postError &&
        <h2 className="post-list container">Произошла ошибка {postError}</h2>
      }

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
