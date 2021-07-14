import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { getPokemonsList } from "service/pokemon";
import { keyGenerator } from "utils/commonUtils";
import StyledCard from "components/StyledCard";

const ITEM_LIMIT = 12;

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    getPokemonsList({ offset, limit: ITEM_LIMIT })
      .then(({ results }) => {
        results.forEach((element) => {
          const url = element.url.split("/");
          element.id = url[url.length - 2];
        });
        setData(results);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [offset]);

  return (
    <div className="content">
      <Container className="pb-4">
        <Row>
          {isLoading ? (
            <Col className="d-flex justify-content-center mt-4">
              <Spinner animation="border" role="status" />
            </Col>
          ) : data.length > 0 ? (
            data.map((item) => (
              <Col
                key={item.id || keyGenerator()}
                className="mt-4"
                xs={12}
                sm={6}
                md={4}
                xl={3}
              >
                <StyledCard
                  url={`/pokemon/${item.id}`}
                  img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                  title={item.name}
                  text={item.id}
                />
              </Col>
            ))
          ) : (
            <Col className="mt-4">No data found...</Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonList;
