import React, {useContext} from 'react';
import {Link} from 'react-router-dom';


import classes from './Navbar.module.css';
import {BasicButton} from '../';
import {AuthContext} from '../../../context';

const Navbar = (props) => {
  const className = props.className ? props.className : '';
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={ `${classes.navbar} ${className}` }>
      <Link to="/react-blog/posts" className={classes.navbar__link}>Посты</Link>
      <Link to="/react-blog/about" className={classes.navbar__link}>О блоге</Link>

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
