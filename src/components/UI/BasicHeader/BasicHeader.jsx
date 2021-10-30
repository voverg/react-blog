import React from 'react';

import classes from './BasicHeader.module.css';

const BasicHeader = ({children, ...props}) => {

  return (
    <div className={classes.basicHeader}>
      {children}
    </div>
  );
};

export default BasicHeader;
