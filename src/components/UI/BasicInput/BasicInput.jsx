import React from 'react';

import classes from './BasicInput.module.css';

const BasicInput = ({className, ...props}) => {
  const inputClassName = className ? className : '';

  return (
    <input
      className={ `${classes.basicInput} ${inputClassName}` }
      {...props}
    />
  );
};

export default BasicInput;
