import React from 'react';

import classes from './BasicInput.module.css';

const BasicInput = (props) => {

  return (
    <input
      className={classes.basicInput}
      {...props}
    />
  );
};

export default BasicInput;
