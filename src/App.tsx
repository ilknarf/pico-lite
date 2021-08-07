import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} />
      </Switch>
    </Router>
  );
}

export default App;
