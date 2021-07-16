import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBox from "components/SearchBox";
import DropdownCard from "components/DropdownCard";
import PokemonList from "views/content/PokemonList";
import PokemonSearchList from "views/content/PokemonSearchList";
import { INFINITE_SCROLL, ITEM_PER_PAGE_LIST } from "contants/listContants";

const PokemonListContainer = () => {
  const [searchKey, setSearchKey] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="content">
      <Container className="pb-4">
        <Row>
          <Col className="d-flex justify-content-end mt-4">
            <DropdownCard
              className="mx-4"
              value={value}
              itemList={ITEM_PER_PAGE_LIST}
              separatedItemList={[INFINITE_SCROLL]}
              onClick={(event) => {
                setValue(event.target.innerText);
              }}
            />
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

export default PokemonListContainer;
