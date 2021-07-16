import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBox from "components/SearchBox";
import PokemonList from "views/content/PokemonList";
import PokemonSearchList from "views/content/PokemonSearchList";

const Pokemons = () => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="content">
      <Container className="pb-4">
        <Row>
          <Col className="d-flex justify-content-end mt-4">
            <SearchBox
              onSearchChanged={setSearchKey}
              placeholder="Pokemon ID or Name..."
            />
          </Col>
        </Row>
        {searchKey ? (
          <PokemonSearchList searchKey={searchKey} />
        ) : (
          <PokemonList />
        )}
      </Container>
    </div>
  );
};

export default Pokemons;
