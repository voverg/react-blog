import React from 'react';

import classes from './BasicFooter.module.css';

const BasicFooter = (props) => {

  return (
    <footer className={classes.basicFooter}>
      <p>Created 2021 by <a href="https://github.com/voverg" target="_blank" rel="noreferrer">Voverg</a></p>
    </footer>
  );
};

export default BasicFooter;
