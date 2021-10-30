import React from 'react';

import classes from './BasicButton.module.css';

const BasicButton = ({children, ...props}) => {
const className = props.className ? props.className : '';

  return (
    <button {...props} className={ `${classes.basicButton} ${className}` }>
      {children}
    </button>
  );
};

export default BasicButton;
