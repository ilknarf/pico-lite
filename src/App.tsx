import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./views/home";

export const App = () => (
  <Router>
    <Switch>
      <Route path={"/"} component={HomePage} />
    </Switch>
  </Router>
);

export default App;
