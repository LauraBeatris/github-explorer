import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard } from "pages/Dashboard";
import { RepositoryDetails } from "pages/RepositoryDetails";
import { SelectedRepositoryContainer } from "contexts/SelectedRepositoryContext/Container";

export function Routes() {
  return (
    <BrowserRouter>
      <SelectedRepositoryContainer>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/repositories" component={RepositoryDetails} />
        </Switch>
      </SelectedRepositoryContainer>
    </BrowserRouter>
  );
}

