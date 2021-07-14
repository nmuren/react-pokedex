import { Pokedex as PokedexWrapper } from "pokeapi-js-wrapper";

const pokedexOptions = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  timeout: 5 * 1000,
  cache: true,
};

export const Pokedex = new PokedexWrapper(pokedexOptions);
