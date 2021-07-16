import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import {
  getPokemonByNameOrId,
  getPokemonSpeciesByNameOrId,
} from "service/pokemon";
import TopBar from "views/layout/TopBar";
import { getPokemonVariant } from "utils/pokemonUtils";
import PokemonStats from "./PokemonStats";
import LoadingSpinner from "components/LoadingSpinner";

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
          resultData.flavorText = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          ).flavor_text;

          setPokemon(resultData);
          setPokemonVariant(getPokemonVariant(resultData.types[0].type.name));
          setIsLoading(false);
        })
        .catch(console.error);
    }
  }, [pokemonId]);

  return (
    <div className="content">
      <Container className="pb-4">
        <TopBar />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <PokemonStats pokemon={pokemon} pokemonVariant={pokemonVariant} />
            <PokemonStats pokemon={pokemon} pokemonVariant={pokemonVariant} />
          </>
        )}
      </Container>
    </div>
  );
};

export default PokemonDetail;
