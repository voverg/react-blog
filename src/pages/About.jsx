import React from 'react';

import {PostFooter} from '../components';
import {BasicHeader, Navbar} from '../components/UI';

const About = (props) => {

  return (
    <React.Fragment>
      <BasicHeader>
        <Navbar />
        <h1 className="post-header__title">О блоге</h1>
      </BasicHeader>

      <div className="about post-list container">
        <h2 className="post-list__title">Это учебный проект, созданный на React.</h2>
      </div>

      <PostFooter />
    </React.Fragment>
  );
};

export default About;
