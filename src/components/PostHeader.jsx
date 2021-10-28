import React from 'react';

import BasicButton from './UI/BasicButton';
import PostSearch from './PostSearch.jsx';

const PostHeader = ({filter, setFilter, setModal}) => {

  return (
    <div className="post-header">
      <div className="post-header__nav">
        <div className="nav-item">
          <BasicButton
            style={{border: '1px solid #fff', color: '#fff'}}
            onClick={() => setModal(true)}
          >
            Создать пост
          </BasicButton>
        </div>

        <div className="nav-item">
          <h1 className="post-header__title">Блог</h1>
        </div>

        <div className="nav-item">
          <PostSearch
            style={{marginBottom: '2px'}}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

      </div>

    </div>
  );
};

export default PostHeader;
