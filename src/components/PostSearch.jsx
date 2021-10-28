import React from 'react';

import BasicInput from './UI/BasicInput';

const PostSelect = ({filter, setFilter}) => {

  return (
    <BasicInput
      type="text"
      placeholder="Поиск..."
      value={filter.query}
      onChange={ event => setFilter({...filter, query: event.target.value}) }
    />
  );
};

export default PostSelect;
