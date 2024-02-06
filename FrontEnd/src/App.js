import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Pocetna from "./Pages/Pocetna";
import Trgovina from "./Pages/Trgovina";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pocetna />
        </Route>
        <Route path="/trgovina" exact>
          <Trgovina />
        </Route>
        <Route path="/page-not-found" exact>
          <PageNotFound />
        </Route>
        <Redirect to="/page-not-found" />
      </Switch>
    </Router>
  );
};

export default App;
