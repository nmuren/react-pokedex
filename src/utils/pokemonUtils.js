import {
  POKEMON_COLOR_GREEN,
  POKEMON_COLOR_RED,
  POKEMON_COLOR_TURQUOISE,
  POKEMON_COLOR_YELLOW,
} from "constants/typeConstants";

export const getPokemonVariant = (type) => {
  if (POKEMON_COLOR_GREEN.includes(type)) return "success";
  else if (POKEMON_COLOR_RED.includes(type)) return "danger";
  else if (POKEMON_COLOR_TURQUOISE.includes(type)) return "info";
  else if (POKEMON_COLOR_YELLOW.includes(type)) return "warning";
  return null;
};
