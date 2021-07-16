import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { readableTextFormat } from "utils/commonUtils";
import StyledCard from "components/StyledCard";
import { getImageSource } from "service/pokemon";
import { MainContext } from "store/MainStore";
import FavoriteIcon from "components/FavoriteIcon";

const PokemonCard = ({ pokemon }) => {
  const store = useContext(MainContext);

  return (
    <Col className="mt-3 pokemon-card" xs={12} sm={6} md={4} xl={3}>
      <FavoriteIcon
        className="pokemon-card-favorite"
        status={store.favoritePokemons.some((item) => item.id == pokemon.id)}
        onChecked={() => {
          const obj = {
            id: pokemon.id,
            name: pokemon.name,
          };
          store.addFavorite(obj);
        }}
        onUnchecked={() => {
          store.removeFavorite(pokemon.id);
        }}
      />
      <StyledCard
        url={`/pokemon/${pokemon.id}`}
        img={getImageSource(pokemon.id)}
        title={readableTextFormat(pokemon.name)}
        text={`#${pokemon.id.padStart(3, 0)}`}
      />
    </Col>
  );
};

export default observer(PokemonCard);
