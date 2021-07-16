import React from "react";
import Col from "react-bootstrap/Col";

import { capitalizeText } from "utils/commonUtils";
import StyledCard from "components/StyledCard";

const PokemonCard = ({ pokemon }) => {
  return (
    <Col className="mt-4" xs={12} sm={6} md={4} xl={3}>
      <StyledCard
        url={`/pokemon/${pokemon.id}`}
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${
          pokemon.id < 650
            ? "dream-world/" + pokemon.id + ".svg"
            : "official-artwork/" + pokemon.id + ".png"
        }`}
        title={capitalizeText(pokemon.name)}
        text={`#${pokemon.id.padStart(3, 0)}`}
      />
    </Col>
  );
};

export default PokemonCard;
