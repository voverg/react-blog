import React, {useState, useEffect} from 'react';

import {PostHeader, PostForm, PostList, PostFooter} from '../components';
import {BasicModal, Loader, BasicButton, Pagination} from '../components/UI';

import PostService from '../API';
import {getPageCount} from '../utils';
import {useFetching, usePosts} from '../hooks';

// import './styles/App.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // Получаем данные от запроса по API
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    // console.log('limit, page: ', limit, page);
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // Выводим посты при загрузке страницы
  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Принимает новый созданный пост. Пересоздаёт массив с добавленным новым постом.
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Принимает пост. Пересоздаёт массив с удалённым постом.
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  // Изменение номера страницы
  const changePage = (pageNumber) => {
    setPage(pageNumber);
    // console.log('limit, page: ', limit, page);
    // fetchPosts(limit, page);
  }

  return (
    <div className="posts">
      <BasicModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} visible={modal} />
      </BasicModal>

      <div className="post-header__wrapper">
        <PostHeader
          filter={filter}
          setFilter={setFilter}
          setModal={setModal}
        />
      </div>

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

      <Pagination
        className="container"
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />

      <PostFooter />

    </div>
  );
}

export default Posts;

