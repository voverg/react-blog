import React from 'react';

import BasicSelect from './UI/BasicSelect';

const PostSelect = ({filter, setFilter}) => {

  return (
      <BasicSelect
        defaultValue="Сортировка"
        value={filter.sort}
        sortPosts={ selectedSort => {setFilter({...filter, sort: selectedSort})} }
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
  );
};

export default PostSelect;
