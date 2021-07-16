import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Link, useLocation } from "react-router-dom";

import { MainContext } from "store/MainStore";
import { ITEM_PER_PAGE_LIST } from "contants/listContants";
import DropdownCard from "components/DropdownCard";
import SearchBox from "components/SearchBox";
import favoriteFilled from "assets/img/favorite-filled-icon.png";
import leftArrow from "assets/img/left-arrow.png";
import remove from "assets/img/remove-icon.png";

const TopBar = () => {
  const store = useContext(MainContext);
  const { pathname } = useLocation();

  return (
    <Row className="pt-3">
      <Col sm={12} md={4}>
        {pathname !== "/myPokemons" ? (
          <Link
            to="/myPokemons"
            className="h-100 btn d-flex justify-content-center align-items-center topbar-button"
          >
            <img
              src={favoriteFilled}
              alt="my pokemons"
              width="40"
              height="40"
            />{" "}
            <span>My Pokémons</span>
          </Link>
        ) : (
          <div>
            <Link
              to="/"
              className="h-100 btn d-flex justify-content-center align-items-center topbar-button"
            >
              <img src={leftArrow} alt="go back" width="30" className="mx-1" />
              <span>Go back to main</span>
            </Link>

            {store.favoritePokemons.length > 0 && (
              <Link
                to="/"
                className="h-100 btn d-flex justify-content-center align-items-center topbar-button"
              >
                <img
                  src={remove}
                  alt="clear favorites"
                  width="30"
                  height="30"
                />{" "}
                <span>Remove all favorites</span>
              </Link>
            )}
          </div>
        )}
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
