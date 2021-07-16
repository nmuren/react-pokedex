import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Pokemons from "views/content/Pokemons";

const Routes = () => (
  <Switch>
    <Route path="/">
      <Pokemons />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
