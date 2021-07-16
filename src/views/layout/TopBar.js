import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { MainContext } from "store/MainStore";
import { ITEM_PER_PAGE_LIST } from "contants/listContants";
import DropdownCard from "components/DropdownCard";
import SearchBox from "components/SearchBox";
import favoriteFilled from "assets/img/favorite-filled-icon.png";

const TopBar = () => {
  const store = useContext(MainContext);

  return (
    <Row className="pt-3">
      <Col>
        <Card className="">
          <Card.Body className="p-0">
            <Link to="/myPokemons" className="h-100 w-100 btn">
              <img
                src={favoriteFilled}
                alt="my pokemons"
                width="40"
                height="40"
              />{" "}
              My Pokémons
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col className="d-flex justify-content-end ">
        <DropdownCard
          className="mx-4 p-2"
          text="Items per page:"
          value={store.itemPerPage}
          itemList={ITEM_PER_PAGE_LIST}
          onClick={(event) => {
            store.setValue("itemPerPage", event.target.innerText);
          }}
        />
        <SearchBox
          className="p-2"
          onSearchChanged={(searchKey) => {
            store.setValue("searchKey", searchKey);
          }}
          value={store.searchKey}
          placeholder="Pokemon ID or Name..."
        />
      </Col>
    </Row>
  );
};
export default observer(TopBar);
