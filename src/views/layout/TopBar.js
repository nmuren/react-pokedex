import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Link, useHistory, useLocation } from "react-router-dom";

import { MainContext } from "store/MainStore";
import { ITEM_PER_PAGE_LIST } from "contants/listContants";
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

  return (
    <Row className="pt-3">
      <Col sm={12} md={4}>
        {pathname !== "/myPokemons" ? (
          <Link
            to="/myPokemons"
            className="h-100 btn d-flex justify-content-center align-items-center topbar-button"
            onClick={() => {
              history.push(pathname);
            }}
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
          <div className="h-100 d-flex gap-2">
            <Link
              to="/"
              className=" w-100 btn d-flex justify-content-center align-items-center topbar-button"
              onClick={() => {
                history.push(pathname);
              }}
            >
              <img
                src={doubleLeftIcon}
                alt="go main"
                width="30"
                className="mx-1"
              />
              <span>Go to main</span>
            </Link>

            <div
              className=" w-100 btn d-flex justify-content-center align-items-center topbar-button"
              onClick={() => {
                history.goBack();
                history.push(pathname);
              }}
            >
              <img src={leftIcon} alt="go back" width="30" className="mx-1" />
              <span>Go back</span>
            </div>

            {store.favoritePokemons.length > 0 && (
              <div
                onClick={store.clearFavorites}
                className=" w-100 btn d-flex justify-content-center align-items-center topbar-button"
              >
                <img
                  src={remove}
                  alt="clear favorites"
                  width="30"
                  height="30"
                />{" "}
                <span>Clear all</span>
              </div>
            )}
          </div>
        )}
      </Col>
      <Col className="d-flex justify-content-end ">
        <DropdownCard
          className="mx-4 p-2"
          text="Items:"
          value={store.itemPerPage}
          itemList={ITEM_PER_PAGE_LIST}
          onClick={(event) => {
            store.setValue("itemPerPage", event.target.innerText);
          }}
        />
        {pathname !== "/myPokemons" ? (
          <SearchBox
            className="p-2"
            onSearchChanged={(searchKey) => {
              store.setValue("searchKey", searchKey);
            }}
            value={store.searchKey}
            placeholder="Pokemon ID or Name..."
          />
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};
export default observer(TopBar);
