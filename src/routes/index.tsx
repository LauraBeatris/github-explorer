import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repository';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repositories} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
