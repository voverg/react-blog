import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {About, Posts, ErrorPage, PostIdPage} from '../pages';
import {routes} from '../router';

const AppRouter = (props) => {

  return (
    <Switch>
      {routes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      )}

      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
