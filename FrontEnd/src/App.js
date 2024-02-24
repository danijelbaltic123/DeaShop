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
import Kontakt from "./Pages/Kontakt";
import MainNavigation from "./Components/Commun/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
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
          <Route path="/kontakt">
            <Kontakt />
          </Route>
          <Redirect to="/page-not-found" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
