import React, {useState, useEffect, useContext, useRef} from 'react';

import {PostHeader, PostForm, PostList} from '../components';
import {BasicModal, Loader, BasicButton, Pagination, BasicFooter} from '../components/UI';

import PostService from '../API';
import {getPageCount} from '../utils';
import {useFetching, usePosts, useObserver} from '../hooks';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElem = useRef();

  // Получаем данные от запроса по API
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    // setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // useObserver(lastElem, page < totalPages, isPostsLoading, () => {
  //   setPage(page + 1);
  // });

  // useEffect(() => {
  //   var options = {
  //     root: document,
  //   }
  //   var callback = function(entries, observer) {
  //     if (isPostsLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     /* Content excerpted, show below */
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(page + 1);
  //       console.log(page);
  //     }
  //   };
  //   observer.current = new IntersectionObserver(callback, options);
  //   observer.current.observe(lastElem.current);
  // }, [isPostsLoading]);

  // Выводим посты при загрузке страницы
  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

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
  }

  return (
    <div className="page">
      <BasicModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} visible={modal} />
      </BasicModal>

      <PostHeader
        filter={filter}
        setFilter={setFilter}
        setModal={setModal}
      />

      {postError &&
        <h2 className="page__content-title container">Произошла ошибка {postError}</h2>
      }

      {isPostsLoading ?
        <div className="post-list container"><Loader /></div>
        :
        <PostList
            posts={sortedAndSearchedPosts}
            title="Список постов"
            removePost={removePost}
            filter={filter}
            setFilter={setFilter}
            limit={limit}
            setLimit={setLimit}
          />
        }
        {/*<div ref={lastElem} style={{height: 20, background: 'yellow'}} />*/}

      <Pagination
        className="container"
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />

      <BasicFooter />
    </div>
  );
}

export default Posts;

