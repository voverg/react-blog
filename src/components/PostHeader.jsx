import React, {useContext} from 'react';

import PostSearch from './PostSearch.jsx';
import {Navbar, BasicButton} from './UI';
import {AuthContext} from '../context';

const PostHeader = ({filter, setFilter, setModal}) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="post-header">
        <div className="post-header__nav container">
          <div className="nav-item">
            <BasicButton
              onClick={() => setModal(true)}
            >
              Создать пост
            </BasicButton>

            <BasicButton
              onClick={logout}
              className="logout__btn"
            >
              Выйти
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
