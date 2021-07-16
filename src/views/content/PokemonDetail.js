import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import { getImageSource, getPokemonByNameOrID } from "service/pokemon";
import TopBar from "views/layout/TopBar";
import { readableTextFormat } from "utils/commonUtils";
import StatBar from "components/StatBar";
import { getPokemonVariant } from "utils/pokemonUtils";

const PokemonDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [pokemonVariant, setPokemonVariant] = useState();
  const { pokemonId } = useParams();
  window.datax = pokemon;

  useEffect(() => {
    if (pokemonId) {
      getPokemonByNameOrID(pokemonId)
        .then((res) => {
          setPokemon(res);
          setPokemonVariant(getPokemonVariant(res.types[0].type.name));
          setIsLoading(false);
        })
        .catch(console.error);
    }
  }, [pokemonId]);

  return (
    <div className="content">
      <Container className="pb-4">
        <TopBar />
        <Row>
          {isLoading ? (
            <Col className="d-flex justify-content-center mt-4">
              <Spinner animation="border" role="status" />
            </Col>
          ) : (
            <Col className="mt-4">
              <Card className="w-100">
                <Card.Header>
                  <span className="text-muted text-medium mx-1 ">
                    {`#${pokemonId.padStart(3, 0)}`}
                  </span>
                  {readableTextFormat(pokemon.name)}
                </Card.Header>
                <Card.Body>
                  <Row className="d-flex align-items-center">
                    <Col
                      sm={12}
                      md={6}
                      className="d-flex justify-content-center "
                    >
                      <img
                        src={getImageSource(pokemonId)}
                        alt={pokemon.name || "pokemon image"}
                        height="250"
                      />
                    </Col>
                    <Col sm={12} md={6}>
                      {pokemon.stats.map(({ base_stat, stat }) => (
                        <StatBar
                          value={base_stat}
                          title={readableTextFormat(stat.name)}
                          key={stat.name}
                          variant={pokemonVariant}
                        ></StatBar>
                      ))}
                    </Col>
                  </Row>
                  <Row>
                    <Col>asdas</Col>
                    <Col>fasfas</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonDetail;
