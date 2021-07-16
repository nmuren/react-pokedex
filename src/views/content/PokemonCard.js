import React from "react";
import Col from "react-bootstrap/Col";

import { readableTextFormat } from "utils/commonUtils";
import StyledCard from "components/StyledCard";
import { getImageSource } from "service/pokemon";

const PokemonCard = ({ pokemon }) => {
  return (
    <Col className="mt-3 pokemon-card" xs={12} sm={6} md={4} xl={3}>
      <StyledCard
        url={`/pokemon/${pokemon.id}`}
        img={getImageSource(pokemon.id)}
        title={readableTextFormat(pokemon.name)}
        text={`#${pokemon.id.padStart(3, 0)}`}
      />
    </Col>
  );
};

export default PokemonCard;
