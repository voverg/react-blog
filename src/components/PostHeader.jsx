import React from 'react';

import BasicButton from './UI/BasicButton';
import PostSearch from './PostSearch.jsx';
import {Navbar} from './UI';

const PostHeader = ({filter, setFilter, setModal}) => {

  return (
    <div className="post-header">
        <div className="post-header__nav container">
          <div className="nav-item">
            <BasicButton
              onClick={() => setModal(true)}
            >
              Создать пост
            </BasicButton>
          </div>

          <div className="nav-item">
            <Navbar />
            {/*<h1 className="post-header__title">Блог</h1>*/}
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
