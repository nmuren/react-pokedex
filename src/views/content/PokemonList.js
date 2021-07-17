import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { getPokemonsList } from "service/pokemon";
import { isArrayContains, keyGenerator } from "utils/commonUtils";
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
    // currently there are no available search
    // queries hence client-side filter applied
    const criteria = !store.searchKey && {
      offset: (active - 1) * store.itemPerPage,
      limit: store.itemPerPage,
    };
    getPokemonsList(criteria)
      .then(({ results, count }) => {
        results.forEach((element) => {
          const url = element.url.split("/");
          element.id = Number(url[url.length - 2]);
        });

        let viewData = [];
        let viewDataCount = [];

        if (store.searchKey) {
          viewData = results.filter(({ name, id }) =>
            isArrayContains(store.searchKey, [name, id])
          );
          viewDataCount = viewData.length;
        } else {
          viewData = results;
          viewDataCount = count;
        }

        setData(viewData);
        setTotalCount(viewDataCount);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [active, store.itemPerPage, store.searchKey]);

  useEffect(() => {
    setActive(1);
  }, [store.searchKey]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Row>
          {data.length > 0 ? (
            (store.searchKey
              ? data.slice(
                  (active - 1) * store.itemPerPage,
                  active * store.itemPerPage
                )
              : data
            ).map((item) => (
              <PokemonCard pokemon={item} key={item.id || keyGenerator()} />
            ))
          ) : (
            <Col className="mt-4">No data found...</Col>
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
