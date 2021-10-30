import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = (props) => {
  const className = props.className ? props.className : '';

  return (
    <div className={ `${classes.navbar} ${className}` }>
      <Link to="/posts" className={classes.navbar__link}>Посты</Link>
      <Link to="/about" className={classes.navbar__link}>О блоге</Link>
    </div>
  );
};

export default Navbar;
