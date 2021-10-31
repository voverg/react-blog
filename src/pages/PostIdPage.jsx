import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {PostFooter} from '../components';
import {BasicHeader, Navbar, Loader} from '../components/UI';

import PostService from '../API';
import {useFetching} from '../hooks';

const PostIdPage = (props) => {
  const params = useParams();
  const [post, setPost] = useState({});

  // Получаем данные от запроса по API
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
    // console.log(post);

  // Выводим пост при загрузке страницы
  useEffect(() => {
    fetchPostById(params.id);
  }, []);

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

      {isLoading
        ? <div className="post-list post-list__loader"><Loader /></div>
        : <div className="about post-list container">
            <h2 className="post-list__title">{post.title}</h2>
            <p className="post-list__content">{post.body}</p>
          </div>
      }


      <PostFooter />
    </React.Fragment>
  );
};

export default PostIdPage;
