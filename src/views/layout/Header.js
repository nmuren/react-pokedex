import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "assets/img/logo.png";
import { MainContext } from "store/MainStore";

const Header = () => {
  const store = useContext(MainContext);

  return (
    <Container fluid>
      <div className="d-flex justify-content-center my-4">
        <Link
          to="/"
          onClick={() => {
            store.setValue("searchKey", "");
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </Container>
  );
};
export default Header;
