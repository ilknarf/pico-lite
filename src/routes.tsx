import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Builder } from "./views/builder";

export const Routes = () => (
  <Router>
    <Switch>
      <Route path={"/"} component={Builder} />
    </Switch>
  </Router>
);
