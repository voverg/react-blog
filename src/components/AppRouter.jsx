import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {Loader} from './UI';
import {About, Posts, ErrorPage, PostIdPage} from '../pages';
import {privateRoutes, publicRoutes} from '../router';
import {AuthContext} from '../context';

const AppRouter = (props) => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )}
        <Redirect to="/about" />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )}
        <Redirect to="/login" />
      </Switch>

  );
};

export default AppRouter;
