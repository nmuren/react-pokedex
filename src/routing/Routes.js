import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonListContainer from "views/content/PokemonListContainer";

const Routes = () => (
  <Switch>
    <Route path="/">
      <PokemonListContainer />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
