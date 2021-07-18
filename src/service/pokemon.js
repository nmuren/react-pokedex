import { Pokedex } from "service/pokedexConfig";

export const getPokemonsList = (interval) => {
  return Pokedex.getPokemonsList(interval);
};

export const getPokemonByNameOrId = (criteria) => {
  return Pokedex.getPokemonByName(criteria);
};

export const getPokemonResource = (url) => {
  return Pokedex.resource(url);
};

export const getImageSource = (id) => {
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/";
  let idSeperator = "";

  if (id < 650) idSeperator = "dream-world/" + id + ".svg";
  else if (id >= 650) idSeperator = "official-artwork/" + id + ".png";

  return baseUrl + idSeperator;
};
