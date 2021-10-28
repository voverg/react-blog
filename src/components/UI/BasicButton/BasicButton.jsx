import React from 'react';

import classes from './BasicButton.module.css';

const BasicButton = ({children, ...props}) => {

  return (
    <button {...props} className={classes.basicButton}>
      {children}
    </button>
  );
};

export default BasicButton;
