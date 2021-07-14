import { Pokedex } from "service/pokedexConfig";

export const getPokemonsList = (interval) => {
  return Pokedex.getPokemonsList(interval);
};
