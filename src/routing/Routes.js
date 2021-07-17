import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonDetail from "views/content/PokemonDetail";
import PokemonFavorites from "views/content/PokemonFavorites";
import PokemonList from "views/content/PokemonList";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <PokemonList />
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
