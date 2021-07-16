import React, { useContext, useEffect, useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { observer } from "mobx-react-lite";

import { getPokemonsList } from "service/pokemon";
import { isArrayContains, keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import PokemonCard from "views/content/PokemonCard";
import { MainContext } from "store/MainStore";

const PokemonSearchList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  const filteredData = useMemo(
    () =>
      data.filter(({ name, id }) =>
        isArrayContains(store.searchKey, [name, id])
      ),
    [store.searchKey, data]
  );

  useEffect(() => {
    setIsLoading(true);
    getPokemonsList()
      .then(({ results }) => {
        results.forEach((element) => {
          const url = element.url.split("/");
          element.id = url[url.length - 2];
        });
        setData(results);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Row>
        {isLoading ? (
          <Col className="d-flex justify-content-center mt-4">
            <Spinner animation="border" role="status" />
          </Col>
        ) : filteredData.length > 0 ? (
          filteredData
            .slice((active - 1) * store.itemPerPage, active * store.itemPerPage)
            .map((item) => (
              <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
            ))
        ) : (
          <Col className="mt-4">No data found...</Col>
        )}
      </Row>
      {filteredData.length > 0 &&
        Math.ceil(filteredData.length / store.itemPerPage) > 1 && (
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Pagination
                active={active}
                total={filteredData.length}
                dataPerPage={store.itemPerPage}
                onChange={setActive}
              />
            </Col>
          </Row>
        )}
    </>
  );
};

export default observer(PokemonSearchList);
