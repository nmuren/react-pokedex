import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { getPokemonsList } from "service/pokemon";
import { keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import { ITEM_LIMIT_PER_PAGE } from "contants/listContants";
import PokemonCard from "views/content/PokemonCard";

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getPokemonsList({
      offset: (active - 1) * ITEM_LIMIT_PER_PAGE,
      limit: ITEM_LIMIT_PER_PAGE,
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
  }, [active]);

  return (
    <>
      <Row>
        {isLoading ? (
          <Col className="d-flex justify-content-center mt-4">
            <Spinner animation="border" role="status" />
          </Col>
        ) : data.length > 0 ? (
          data.map((item) => (
            <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
          ))
        ) : (
          <Col className="mt-4">No data found...</Col>
        )}
      </Row>
      {totalCount > 0 && Math.ceil(totalCount / ITEM_LIMIT_PER_PAGE) > 1 && (
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <Pagination
              active={active}
              total={totalCount}
              dataPerPage={ITEM_LIMIT_PER_PAGE}
              onChange={setActive}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default PokemonList;
