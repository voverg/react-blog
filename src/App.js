import React, {useState, useMemo} from 'react';

import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import PostFilter from './components/PostFilter.jsx';
// import BasicSelect from './components/UI/select';
// import BasicInput from './components/UI/input';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: ' post', body: 'This is a first post'},
    {id: 2, title: ' article', body: 'This is a second post'},
    {id: 3, title: ' notice', body: 'This is a third post'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const getSortedPosts = () => {
    console.log('Отработала функция getSortedPosts');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  };

  const sortedPosts = useMemo(getSortedPosts, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  // const sortPosts = (sortValue) => {
  //   setSelectedSort(sortValue);
  // }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        removePost={removePost}
      />
    </div>
  );
}

export default App;
