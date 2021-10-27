import React, {useState} from 'react';

import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import BasicSelect from './components/UI/select';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: ' post', body: 'This is a first post'},
    {id: 2, title: ' article', body: 'This is a second post'},
    {id: 3, title: ' notice', body: 'This is a third post'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  const sortPosts = (sortValue) => {
    setSelectedSort(sortValue);
    setPosts( [...posts].sort((a, b) => a[sortValue].localeCompare(b[sortValue])) );
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr />

      <BasicSelect
        defaultValue="Сортировка"
        value={selectedSort}
        sortPosts={sortPosts}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />

      <PostList
        posts={posts}
        title="Список постов"
        removePost={removePost}
      />
    </div>
  );
}

export default App;
