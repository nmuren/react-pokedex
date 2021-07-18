import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPokemonByNameOrId, getPokemonResource } from "service/pokemon";
import { getPokemonVariant } from "utils/pokemonUtils";
import PokemonStats from "views/content/PokemonStats";
import LoadingSpinner from "components/LoadingSpinner";
import PokemonAbilities from "views/content/PokemonAbilities";

const PokemonDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [pokemonVariant, setPokemonVariant] = useState();
  const { pokemonId } = useParams();

  useEffect(() => {
    if (pokemonId) {
      getPokemonByNameOrId(pokemonId)
        .then((pokemonRes) => {
          getPokemonResource(pokemonRes.species.url).then((speciesRes) => {
            pokemonRes.flavorText = speciesRes.flavor_text_entries
              .find((entry) => entry.language.name === "en")
              .flavor_text.replaceAll("\f", " ");

            setPokemon(pokemonRes);
            setPokemonVariant(getPokemonVariant(pokemonRes.types[0].type.name));
            setIsLoading(false);
          });
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
