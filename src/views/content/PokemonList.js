import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { getPokemonsList } from "service/pokemon";
import { keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import PokemonCard from "views/content/PokemonCard";
import { MainContext } from "store/MainStore";
import LoadingSpinner from "components/LoadingSpinner";

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  useEffect(() => {
    setIsLoading(true);
    getPokemonsList({
      offset: (active - 1) * store.itemPerPage,
      limit: store.itemPerPage,
    })
      .then(({ results, count }) => {
        results.forEach((element) => {
          const url = element.url.split("/");
          element.id = url[url.length - 2];
        });
        setData(results);
        setTotalCount(count);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [active, store.itemPerPage]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Row>
          {data.length > 0 ? (
            data.map((item) => (
              <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
            ))
          ) : (
            <Col className="mt-3">No data found...</Col>
          )}
        </Row>
      )}

      {totalCount > 0 && Math.ceil(totalCount / store.itemPerPage) > 1 && (
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <Pagination
              active={active}
              total={totalCount}
              dataPerPage={store.itemPerPage}
              onChange={setActive}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default observer(PokemonList);
