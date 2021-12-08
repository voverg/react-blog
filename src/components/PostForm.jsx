import React, {useState, useMemo} from 'react';

import BasicButton from './UI/BasicButton';
import BasicInput from './UI/BasicInput';

const PostForm = ({createPost, visible}) => {
  const [post, setPost] = useState({title: '', body: ''});

  // Очищаем поля формы, когда она становится невидимой
  useMemo(() => {
    if (!visible) {
      setPost({...post, title: '', body: ''});
    }
  }, [visible])

  // Добавить новый пост
  const addNewPost = (event) => {
    event.preventDefault();
    if (!post.title || !post.body) return;

    const newPost = {
      ...post,
      id: Date.now(),
    };

    // Добавляем новый пост в массив с постами
    createPost(newPost);

    // Очистка полей формы после создания поста
    // setPost({...post, title: '', body: ''});
  };

  return (
    <form className="post-form">
      <h2 className="post-form__title">Добавить новый пост</h2>
      <BasicInput
        type="text"
        className="post-form__input"
        placeholder="Введите название поста"
        value={post.title}
        onChange={ event => setPost({...post, title: event.target.value}) }
        required={true}
      />
      <BasicInput
        type="text"
        className="post-form__input"
        placeholder="Введите описание поста"
        value={post.body}
        onChange={ event => setPost({...post, body: event.target.value}) }
        required={true}
      />
      <div className="post-form__btns">
        <BasicButton onClick={addNewPost}>Добавить пост</BasicButton>
      </div>
    </form>
  );
};

export default PostForm;
