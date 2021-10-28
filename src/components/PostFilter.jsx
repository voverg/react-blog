import React from 'react';

import BasicInput from './UI/input';
import BasicSelect from './UI/select';

const PostFilter = ({filter, setFilter}) => {

  return (
    <div className="post-filter">
      <BasicInput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={ event => setFilter({...filter, query: event.target.value}) }
      />

      <BasicSelect
        defaultValue="Сортировка"
        value={filter.sort}
        sortPosts={ selectedSort => {setFilter({...filter, sort: selectedSort})} }
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;
