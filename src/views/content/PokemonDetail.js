import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getPokemonByNameOrId,
  getPokemonSpeciesByNameOrId,
} from "service/pokemon";
import { getPokemonVariant } from "utils/pokemonUtils";
import PokemonStats from "views/content/PokemonStats";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonAbilities from "views/content/PokemonAbilities";

const PokemonDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [pokemonVariant, setPokemonVariant] = useState();
  const { pokemonId } = useParams();
  window.datax = pokemon;

  useEffect(() => {
    if (pokemonId) {
      const generalDataPromise = new Promise((resolve) => {
        getPokemonByNameOrId(pokemonId).then((res) => {
          resolve(res);
        });
      });

      const speciesDataPromise = new Promise((resolve) => {
        getPokemonSpeciesByNameOrId(pokemonId).then((res) => {
          resolve(res);
        });
      });

      Promise.all([generalDataPromise, speciesDataPromise])
        .then(([generalData, speciesData]) => {
          const resultData = generalData;
          resultData.flavorText = speciesData.flavor_text_entries
            .find((entry) => entry.language.name === "en")
            .flavor_text.replaceAll("\f", " ");

          setPokemon(resultData);
          setPokemonVariant(getPokemonVariant(resultData.types[0].type.name));
          setIsLoading(false);
        })
        .catch(console.error);
    }
  }, [pokemonId]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <PokemonStats pokemon={pokemon} pokemonVariant={pokemonVariant} />
      <PokemonAbilities pokemon={pokemon} />
    </>
  );
};

export default PokemonDetail;
