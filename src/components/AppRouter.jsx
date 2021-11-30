import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {Loader} from './UI';
import {About, Posts, ErrorPage, PostIdPage} from 'pages';
import {privateRoutes, publicRoutes, routeNames} from 'router';
import {AuthContext} from 'context';

const AppRouter = (props) => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <div className="post-list container"><Loader /></div>
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
        <Redirect to={routeNames.ABOUT} />
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
        <Redirect to={routeNames.LOGIN} />
      </Switch>

  );
};

export default AppRouter;
