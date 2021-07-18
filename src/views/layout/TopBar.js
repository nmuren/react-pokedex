import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Link, useHistory, useLocation } from "react-router-dom";

import { MainContext } from "store/MainStore";
import { ITEM_PER_PAGE_LIST } from "constants/listConstants";
import DropdownCard from "components/DropdownCard";
import SearchBox from "components/SearchBox";
import favoriteFilled from "assets/img/favorite-filled-icon.png";
import leftIcon from "assets/img/left-icon.png";
import doubleLeftIcon from "assets/img/double-left-icon.png";
import remove from "assets/img/remove-icon.png";

const TopBar = () => {
  const store = useContext(MainContext);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleRoute = () => {
    history.push(pathname);
  };

  return (
    <Row className="pt-3 gap-2 topbar">
      <Col md={12} lg={6} className="h-100 d-flex gap-2">
        {pathname !== "/" && (
          <>
            <Link to="/" className="btn topbar-button" onClick={handleRoute}>
              <img
                src={doubleLeftIcon}
                alt="go main"
                width="30"
                className="mx-1"
              />
              <span>Go to main</span>
            </Link>

            <div
              className="btn topbar-button"
              onClick={() => {
                history.goBack();
                handleRoute();
              }}
            >
              <img src={leftIcon} alt="go back" width="30" className="mx-1" />
              <span>Go back</span>
            </div>
          </>
        )}

        {pathname === "/myPokemons" ? (
          store.favoritePokemons.length > 0 && (
            <div onClick={store.clearFavorites} className="btn topbar-button">
              <img src={remove} alt="clear favorites" width="30" />{" "}
              <span>Clear all</span>
            </div>
          )
        ) : (
          <Link
            to="/myPokemons"
            className="btn topbar-button"
            onClick={handleRoute}
          >
            <img src={favoriteFilled} alt="my pokemons" width="30" />{" "}
            <span>My Pokémons</span>
          </Link>
        )}
      </Col>
      <Col className="d-flex justify-content-end gap-2">
        <DropdownCard
          className="p-2"
          text="Items:"
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
          placeholder="Pokémon ID or Name..."
        />
      </Col>
    </Row>
  );
};
export default observer(TopBar);
