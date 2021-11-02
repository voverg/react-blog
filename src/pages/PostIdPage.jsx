import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

import {BasicHeader, Navbar, BasicFooter, Loader, BasicButton} from '../components/UI';
import PostService from '../API';
import {useFetching} from '../hooks';

const PostIdPage = (props) => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  // Получаем данные поста от запроса по API
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  // Получаем данные комментариев поста от запроса по API
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  // Выводим пост при загрузке страницы
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className="page">
      <BasicHeader>
        <h1 className="page__header-title">Пост с ID = {params.id}</h1>
        <Navbar />
      </BasicHeader>

      {isPostLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : <div className="page__content container">
            <h2 className="page__content-title">{post.title}</h2>
            <p>{post.body}</p>
          </div>
      }

      <h2 className="container">Комментарии</h2>
      {isPostLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : comments.map(comment =>
            <div className="container" key={comment.id}>
              <p><strong>Имя:</strong> {comment.name}</p>
              <p><strong>Эл. почта:</strong> {comment.email}</p>
              <p><strong>Комментарий:</strong> {comment.body}</p>
            </div>
          )
      }

      <BasicFooter />
    </div>
  );
};

export default PostIdPage;
