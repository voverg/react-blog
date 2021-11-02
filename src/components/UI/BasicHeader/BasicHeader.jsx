import React from 'react';

import classes from './BasicHeader.module.css';

const BasicHeader = ({children, ...props}) => {
  const className = props.className ? props.className : '';

  return (
    <div className={ `${classes.basicHeader} ${className}` }>
      <div className={classes.basicHeader__container}>
        {children}
      </div>
    </div>
  );
};

export default BasicHeader;
