import React, {useState} from 'react';

import BasicButton from './UI/button';
import BasicInput from './UI/input';

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (event) => {
    event.preventDefault();
    if (!post.title || !post.body) return;

    const newPost = {
      ...post,
      id: Date.now(),
    };

    // Добавляем новый пост в массив с постами
    createPost(newPost);

    // Очистка полей формы
    setPost({...post, title: '', body: ''});
  };

  return (
    <form className="post-form">
      <BasicInput
        type="text"
        placeholder="Введите название поста"
        value={post.title}
        onChange={ event => setPost({...post, title: event.target.value}) }
      />
      <BasicInput
        type="text"
        placeholder="Введите описание поста"
        value={post.body}
        onChange={ event => setPost({...post, body: event.target.value}) }
      />
      <BasicButton onClick={addNewPost}>Добавить пост</BasicButton>
    </form>
  );
};

export default PostForm;
