import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonList from "views/content/PokemonList";

const Routes = () => (
  <Switch>
    <Route path="/">
      <PokemonList />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
