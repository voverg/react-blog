import {useMemo} from 'react';

export const _useSortedPosts = (posts, sort) => {
  const getSortedPosts = () => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  };

  const sortedPosts = useMemo(getSortedPosts, [sort, posts]);

  return sortedPosts;
}

// Принимает список постов, метод сортировки, запрос из поиска. Возвращает список постов,
// отсортированный по методу сортировки и запросу из поискового поля
export const usePosts = (posts, sort, query) => {
  const sortedPosts = _useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}
