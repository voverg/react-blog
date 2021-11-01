import React from 'react';

import {PostFooter} from '../components';
import {BasicHeader, Navbar} from '../components/UI';

const Error = (props) => {

  return (
    <React.Fragment>
      <BasicHeader  className="about__nav">
        <div className="nav-item container">
          <h1 className="about__title">404</h1>
        </div>
        <div className="nav-item container">
          <Navbar />
        </div>
      </BasicHeader>

      <div className="error post-list container">
        <h2 className="post-list__title">Такой страницы не существует!</h2>
      </div>

      <PostFooter />
    </React.Fragment>
  );
};

export default Error;