import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Link, useHistory, useLocation } from "react-router-dom";

import logo from "assets/img/logo.svg";
import { MainContext } from "store/MainStore";

const Header = () => {
  const store = useContext(MainContext);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Container fluid>
      <div className="d-flex justify-content-center my-4">
        <Link
          to="/"
          onClick={() => {
            store.setValue("searchKey", "");
            history.push(pathname);
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </Container>
  );
};
export default Header;
