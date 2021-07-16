import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { readableTextFormat } from "utils/commonUtils";
import { getImageSource } from "service/pokemon";
import StatBar from "components/StatBar";

const PokemonStats = ({ pokemon = {}, pokemonVariant }) => {
  return (
    <Card className="w-100 mt-3">
      <Card.Header>
        <span className="text-muted text-medium mx-1 ">
          {`#${pokemon.id.toString().padStart(3, 0)}`}
        </span>
        {readableTextFormat(pokemon.name)}
      </Card.Header>
      <Card.Body>
        <Row className="d-flex align-items-center">
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center ">
            <img
              src={getImageSource(pokemon.id)}
              alt={pokemon.name || "pokemon image"}
              height="250"
              className="w-100"
            />
          </Col>
          <Col sm={12} md={6} lg={8}>
            {pokemon.stats.map(({ base_stat, stat: { name } }) => (
              <StatBar
                value={base_stat}
                title={readableTextFormat(name)}
                key={name}
                variant={pokemonVariant}
              ></StatBar>
            ))}
            <p className="mt-3">{pokemon.flavorText}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default PokemonStats;
