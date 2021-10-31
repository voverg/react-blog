import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {About, Posts, Error} from '../pages';

const AppRouter = (props) => {

  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/Error" />
    </Switch>
  );
};

export default AppRouter;
