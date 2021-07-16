import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonDetail from "views/content/PokemonDetail";
import PokemonFavorites from "views/content/PokemonFavorites";
import PokemonListContainer from "views/content/PokemonListContainer";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <PokemonListContainer />
    </Route>
    <Route path="/pokemon/:pokemonId">
      <PokemonDetail />
    </Route>
    <Route path="/myPokemons">
      <PokemonFavorites />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
