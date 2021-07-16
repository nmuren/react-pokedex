import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonDetail from "views/content/PokemonDetail";
import PokemonListContainer from "views/content/PokemonListContainer";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <PokemonListContainer />
    </Route>
    <Route path="/pokemon/:pokemonId">
      <PokemonDetail />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
