import React, { useEffect, useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { getPokemonsList } from "service/pokemon";
import { isArrayContains, keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import { ITEM_LIMIT_PER_PAGE } from "contants/listContants";
import PokemonCard from "./PokemonCard";

const PokemonSearchList = ({ searchKey = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);

  const filteredData = useMemo(
    () => data.filter(({ name, id }) => isArrayContains(searchKey, [name, id])),
    [searchKey, data]
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
            .slice(
              (active - 1) * ITEM_LIMIT_PER_PAGE,
              active * ITEM_LIMIT_PER_PAGE
            )
            .map((item) => (
              <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
            ))
        ) : (
          <Col className="mt-4">No data found...</Col>
        )}
      </Row>
      {filteredData.length > 0 &&
        Math.ceil(filteredData.length / ITEM_LIMIT_PER_PAGE) > 1 && (
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Pagination
                active={active}
                total={filteredData.length}
                dataPerPage={ITEM_LIMIT_PER_PAGE}
                onChange={setActive}
              />
            </Col>
          </Row>
        )}
    </>
  );
};

export default PokemonSearchList;
