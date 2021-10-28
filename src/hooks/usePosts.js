import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
  const getSortedPosts = () => {
    console.log('Отработала функция getSortedPosts');
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  };

  const sortedPosts = useMemo(getSortedPosts, [sort, posts]);

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}
