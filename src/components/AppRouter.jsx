import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {About, Posts, ErrorPage, PostIdPage} from '../pages';
import {privateRoutes, publicRoutes} from '../router';
import {AuthContext} from '../context';

const AppRouter = (props) => {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth);

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
