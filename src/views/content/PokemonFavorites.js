import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import PokemonCard from "views/content/PokemonCard";
import { MainContext } from "store/MainStore";

const PokemonFavorites = () => {
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  return (
    <>
      <Row>
        {store.favoritePokemons.length > 0 ? (
          store.favoritePokemons
            .slice((active - 1) * store.itemPerPage, active * store.itemPerPage)
            .map((item) => (
              <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
            ))
        ) : (
          <Col className="mt-4">No favorites yet...</Col>
        )}
      </Row>

      {store.favoritePokemons.length > 0 &&
        Math.ceil(store.favoritePokemons.length / store.itemPerPage) > 1 && (
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Pagination
                active={active}
                total={store.favoritePokemons.length}
                dataPerPage={store.itemPerPage}
                onChange={setActive}
              />
            </Col>
          </Row>
        )}
    </>
  );
};

export default observer(PokemonFavorites);
