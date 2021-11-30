import React, {useContext} from 'react';
import {Link} from 'react-router-dom';


import classes from './Navbar.module.css';
import {BasicButton} from 'components/UI';
import {AuthContext} from 'context';
import {routeNames} from 'router';

const Navbar = (props) => {
  const className = props.className ? props.className : '';
  const {isAuth, setIsAuth, username} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('blogAuth');
    localStorage.removeItem('blogUsername');
  }

  return (
    <div className={ `${classes.navbar} ${className}` }>
    <Link to={routeNames.POSTS} className={classes.navbar__link}>Посты</Link>
      <Link to={routeNames.ABOUT} className={classes.navbar__link}>О блоге</Link>

      <BasicButton
        className={classes.logout__btn}
        onClick={logout}
      >
        Выйти
      </BasicButton>
    </div>
  );
};

export default Navbar;
