import React from 'react';

import classes from './BasicModal.module.css';

const BasicModal = ({children, visible, setVisible}) => {
  const rootClasses = [classes.basicModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.basicModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicModal;
