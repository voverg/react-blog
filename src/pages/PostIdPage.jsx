import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {PostFooter} from '../components';
import {BasicHeader, Navbar, Loader} from '../components/UI';

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

// console.log(comments);

  return (
    <React.Fragment>
      <BasicHeader className="about__nav">
        <div className="nav-item container">
          <h1 className="about__title">Пост c ID = {params.id}</h1>
        </div>
        <div className="nav-item container">
          <Navbar />
        </div>
      </BasicHeader>

      {isPostLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : <div className="about post-list container">
            <h2 className="post-list__title">{post.title}</h2>
            <p className="post-list__content">{post.body}</p>
          </div>
      }

      <h2 className="about container">Комментарии</h2>
      {isPostLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : comments.map(comment =>
            <div className="about container" key={comment.id}>
              <p className="post-list__content"><strong>Имя:</strong> {comment.name}</p>
              <p className="post-list__content"><strong>Эл. почта:</strong> {comment.email}</p>
              <p className="post-list__content"><strong>Комментарий:</strong> {comment.body}</p>
            </div>
          )
      }


      <PostFooter />
    </React.Fragment>
  );
};

export default PostIdPage;
